import { tagTypes } from "../tag-types";
import { baseApi } from "./baseapi";

const BloodDonateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    BloodDonateRequest: build.mutation({
      query: (data) => {
        return {
          url: `/donation-request`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.BloodRequest, tagTypes.MyBloodRequest],
    }),

    MyDonateRequestList: build.query({
      query: (data) => {
        return {
          url: "/my-request-view",
          method: "GET",
          params: data,
        };
      },
      providesTags: [tagTypes.MyBloodRequest],
    }),
    GetRequestDetails: build.query({
      query: (id) => {
        return {
          url: `/request-details/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.Donner],
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
  useBloodDonateRequestMutation,
  useMyDonateRequestListQuery,
  useGetRequestDetailsQuery,

  useGetMyBloodDonnerRequestQuery,
  useGetBloodDonnerRequestQuery,
  useUpadtestatusMutation,
} = BloodDonateApi;
