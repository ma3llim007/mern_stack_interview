import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";

function App() {
    return (
        <div className="w-full h-screen bg-slate-200 text-black dark:bg-slate-950 dark:text-white">
            <TodoForm />
            <TodosList />
        </div>
    );
}

export default App;
