import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import API from "@services/api.services";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { IProduct } from "@customTypes";

type TResponse = { success: boolean, data: IProduct[] };

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, { rejectWithValue, fulfillWithValue, getState, signal }) => {
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsId.map((el) => `${el}`).join("&");
      const response = await API.get<TResponse>(
        `/api/food/${concatenatedItemsId}`,
        { signal }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByItems;