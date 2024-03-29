import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.userToken
            console.log(token)
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: '/api/auth/user/',
                method: 'GET',
            }),
        }),
    }),
})


export const { useGetUserDetailsQuery } = authApi