import { useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "../features/todosApi";

const TodosList = () => {
    const { data: todos, isLoading } = useGetTodosQuery();
    const [deleteTodo] = useDeleteTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    if (isLoading) return <p>Loading...</p>;
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => updateTodo({ id: todo.id, completed: !todo.completed, title: todo.title })} />
                    {todo.title}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodosList;
