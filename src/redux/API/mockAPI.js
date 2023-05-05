import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
axios.defaults.baseURL = "https://6454db56a74f994b334ae0b9.mockapi.io/";

export const getUser = async () => {
  const result = await axios.get(`user`);
  const data = result.data;
  return data;
};
export const getCurrentUser = async (id) => {
  const result = await axios.get(`/user/:${id}`);
  const data = result.data;
  return data;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6454db56a74f994b334ae0b9.mockapi.io/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUserApi: builder.query({
      query: (page) => `user?completed=false&page=${page}&limit=3`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `user/${id}`,
        method: "PUT",
        body: patch,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUserApiQuery, useUpdateUserMutation } = userApi;
