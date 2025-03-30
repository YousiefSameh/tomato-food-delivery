import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@services/api.services";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TFormData = {
  email: string;
  password: string;
};

type TResponse = {
  success: boolean;
  token: string;
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, { rejectWithValue }) => {
    try {
      const res = await API.post<TResponse>("/api/user/login", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actAuthLogin;