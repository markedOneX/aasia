import { createSlice } from "@reduxjs/toolkit";

const VariantSlice = createSlice({
  name: "one",
  initialState: {
    username: "",
    token: undefined,
  },
  reducers: {
    tokenValue: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { tokenValue } = VariantSlice.actions;
export default VariantSlice.reducer;
