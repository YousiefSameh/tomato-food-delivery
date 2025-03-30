import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@services/api.services";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TFormData = {
	name: string;
	email: string;
	password: string;
};

const actAuthRegister = createAsyncThunk(
	"auth/actAuthRegister",
	async (formData: TFormData, { rejectWithValue }) => {
		try {
			const res = await API.post("/api/user/register", formData);
			return res.data;
		} catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
	}
);

export default actAuthRegister;
