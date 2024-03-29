import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signApi = createApi({
  reducerPath: "signApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = signApi;
