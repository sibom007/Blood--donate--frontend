import { tagTypes } from "../tag-types";
import { baseApi } from "./baseapi";

const BloodDoonerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetDonnerList: build.query({
      query: (data) => {
        return {
          url: "donor-list",
          method: "GET",
          params: data,
        };
      },
      providesTags: [tagTypes.Donner],
    }),
    GetSingleDonner: build.query({
      query: (id) => {
        return {
          url: `donner-details/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.Donner],
    }),
    BloodDonnerRequest: build.mutation({
      query: (data) => {
        return {
          url: `donation-request`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.BloodRequest, tagTypes.MyBloodRequest],
    }),
    GetMyBloodDonnerRequest: build.query({
      query: () => {
        return {
          url: `mydonation-request`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.MyBloodRequest],
    }),
    GetBloodDonnerRequest: build.query({
      query: () => {
        return {
          url: `givenDonation-request`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.BloodRequest],
    }),
    Upadtestatus: build.mutation({
      query: (args) => {
        return {
          url: `donation-request/${args.id}`,
          method: "PUT",
          data: args.data,
        };
      },
      invalidatesTags: [tagTypes.BloodRequest],
    }),
  }),
});

export const {
  useGetDonnerListQuery,
  useGetSingleDonnerQuery,
  useBloodDonnerRequestMutation,
  useGetMyBloodDonnerRequestQuery,
  useGetBloodDonnerRequestQuery,
  useUpadtestatusMutation,
} = BloodDoonerApi;
