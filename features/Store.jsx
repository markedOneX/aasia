import { configureStore } from "@reduxjs/toolkit";
import variantReducer from "./VariantSlice";

const Store = configureStore({
  reducer: { variantOne: variantReducer },
});

export default Store;
