import { baseApi } from './baseApi'

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegistration: build.mutation({
      query: data => ({
        url: '/register',
        method: 'POST',
        body: data
      })
    }),
    userLogin: build.mutation({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data
      })
    }),
    getUsers: build.query({
      query: ({ query }) => ({
        url: `/users?${query}`,
        method: 'GET'
      })
    }),
    getUser: build.query({
      query: ({ id, query }) => ({
        url: `/users/${id}?${query}`,
        method: 'GET'
      })
    })
  })
})

export const { useUserRegistrationMutation, useUserLoginMutation, useGetUsersQuery, useGetUserQuery } =
  userApi
