import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import { TLoading } from "@customTypes";

interface IAuthState {
	token: string | null;
	loading: TLoading;
	error: string | null;
}

const initialState: IAuthState = {
	token: null,
	loading: "idle",
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		resetUI: (state) => {
			state.loading = "idle";
			state.error = null;
		},
		authLogout: (state) => {
			state.token = null;
		},
	},
	extraReducers: (builder) => {
		//register
		builder.addCase(actAuthRegister.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(actAuthRegister.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.token = action.payload.token;
		});
		builder.addCase(actAuthRegister.rejected, (state, action) => {
			state.loading = "failed";
			if (action.payload && typeof action.payload === "string") {
				state.error = action.payload;
			}
		});

		// login
		builder.addCase(actAuthLogin.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(actAuthLogin.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.token = action.payload.token;
		});
		builder.addCase(actAuthLogin.rejected, (state, action) => {
			state.loading = "failed";
			if (action.payload && typeof action.payload === "string") {
				state.error = action.payload;
			}
		});
	},
});

export { actAuthRegister, actAuthLogin };
export const { resetUI, authLogout } = authSlice.actions;
export default authSlice.reducer;
