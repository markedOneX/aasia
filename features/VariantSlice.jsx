import { createSlice } from "@reduxjs/toolkit";
//Created a slice and set the initial states to refer in the logic down the line.
const VariantSlice = createSlice({
  name: "one",
  initialState: {
    username: "",
    token: undefined,
  },
  //Managed incoming payload and saved the token to localStorage.
  reducers: {
    tokenValue: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { tokenValue } = VariantSlice.actions;
//Exported Variant slice reducer to use in Store
export default VariantSlice.reducer;
