import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./intemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import cartSlice from "./cartSlice";

const flipkartStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default flipkartStore;
