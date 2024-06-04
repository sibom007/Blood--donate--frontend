import { baseApi } from "./baseapi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation({
      query: (data) => {
        return {
          url: "register",
          method: "POST",
          data,
        };
      },
    }),
    Login: build.mutation({
      query: (data) => {
        return {
          url: "login",
          method: "POST",
          data,
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
  useRegisterMutation,
  useLoginMutation,
  useGetMyProfileQuery,
  useChangepasswordMutation,
  useGetMyProfileBYIdQuery,
} = AuthApi;
