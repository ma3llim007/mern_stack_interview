import React, { useState } from "react";
import { useAddTodoMutation } from "../features/todosApi";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const [addTodo] = useAddTodoMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        await addTodo({ title, completed: false });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New todo" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
