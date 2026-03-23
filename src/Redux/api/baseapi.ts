import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { baseQueryWithAuth } from "@/helper/axios/baseQueryWithAuth";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
