import { configureStore } from '@reduxjs/toolkit';
import foodList from "./FoodList/FoodList.slice";
import cart from "./Cart/cart.slice";

export const store = configureStore({
  reducer: {
    foodList,
    cart
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch