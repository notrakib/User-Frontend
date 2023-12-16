import { createSlice } from "@reduxjs/toolkit";
import { signApi } from "./Sign.api";

const initialState = {
  signed_in: false,
  token: null,
};

const signSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      signApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        if (payload.token) {
          state.signed_in = true;
          state.token = payload.token;
        }
      }
    );
  },
});

export default signSlice.reducer;
