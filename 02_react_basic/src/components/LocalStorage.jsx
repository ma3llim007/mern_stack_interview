import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
    const { theme, setTheme } = useLocalStorage("theme", "light");
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col space-y-3">
            <h1 className="text-2xl font-bold">Current Theme Is: {theme}</h1>
            <button
                className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default LocalStorage;
