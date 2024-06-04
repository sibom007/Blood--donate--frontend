import { tagTypes } from "../tag-types";
import { baseApi } from "./baseapi";

const BloodDoonerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetAllUser: build.query({
      query: () => {
        return {
          url: "All_user",
          method: "GET",
        };
      },
      providesTags: [tagTypes.Alluser, tagTypes.Donner],
    }),
    UpdateUserStatus: build.mutation({
      query: (args) => {
        return {
          url: `updateUser-status/${args.id}`,
          method: "PUT",
          data: args.data,
        };
      },
      invalidatesTags: [tagTypes.Alluser, tagTypes.Donner],
    }),
    UpdateUserRole: build.mutation({
      query: (args) => {
        return {
          url: `updateUser-role/${args.id}`,
          method: "PUT",
          data: args.data,
        };
      },
      invalidatesTags: [tagTypes.Alluser, tagTypes.Donner],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserStatusMutation,
  useUpdateUserRoleMutation,
} = BloodDoonerApi;
