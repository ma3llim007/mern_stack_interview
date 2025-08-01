import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // react endpoint hooks!

const todosApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "todos?_limit=20",
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "todos", // ✅ fixed
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `todos/${id}`, // ✅ fixed
                method: "PUT",
                body: patch,
            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todosApi;

export default todosApi;
