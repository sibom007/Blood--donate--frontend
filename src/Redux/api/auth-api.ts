import { baseApi } from "./baseapi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data) => {
        return {
          url: "create-user",
          method: "POST",
          data,
        };
      },
    }),
    signIn: build.mutation({
      query: (data) => {
        return {
          url: "auth/login",
          method: "POST",
          data,
        };
      },
    }),
    logout: build.mutation({
      query: () => {
        return {
          url: "auth/logout",
          method: "POST",
        };
      },
    }),
    Changepassword: build.mutation({
      query: (data) => {
        return {
          url: "auth/change-password",
          method: "POST",
          data,
        };
      },
    }),
    GetMyProfile: build.query({
      query: () => {
        return {
          url: "my-profile",
          method: "GET",
        };
      },
    }),
    GetMyProfileBYId: build.query({
      query: (id) => {
        return {
          url: `my-profile/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutMutation,
  useChangepasswordMutation,
  useGetMyProfileQuery,
  useGetMyProfileBYIdQuery,
} = AuthApi;
