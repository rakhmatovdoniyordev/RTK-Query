import { api } from './index'

export const cardsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query({
      query: (params) => ({
        url: '/cards',
        params
      }),
      providesTags:["Cards"]
    }),
    createCard: build.mutation({
      query: (body)=> ({
        url:"/cards",
        method: "POST",
        body
      }),
      invalidatesTags: ["Cards"]
    }),
    deleteCard: build.mutation({
      query: (id)=> ({
        url:`/cards/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Cards"]
    }),
    updateCard: build.mutation({
      query: ({id, body})=> ({
        url:`/cards/${id}`,
        method: "PUT", // or "PATCH"
        body
      }),
      invalidatesTags: ["Cards"]
    })
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation
} = cardsApi