import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:19000/',
    }),
    endpoints: (builder) => ({
        verifyConnection: builder.query({ query: () => '' }),
        getMessage: builder.query({ query: () => 'getMessage'})
    })
});

export const { useVerifyConnectionQuery, useGetMessageQuery } = mainApi;