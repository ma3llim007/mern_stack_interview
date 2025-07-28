import UserList from "./components/UserList";

const App = () => {
    return (
        <section className="w-full min-h-screen bg-slate-950 text-white">
            <div className="container mx-auto flex justify-center items-center">
                <UserList />
            </div>
        </section>
    );
};

export default App;
