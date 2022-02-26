import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonApi = createApi({
  reducerPath: 'jsonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),

    getPosts: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery } = jsonApi;
