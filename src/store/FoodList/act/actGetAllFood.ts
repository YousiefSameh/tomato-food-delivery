import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import API from "@services/api.services";

const actGetAllFood = createAsyncThunk("foodList/actGetAllFood", async (_, { rejectWithValue }) => {
  try {
    const res = await API.get("/api/food");
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetAllFood;