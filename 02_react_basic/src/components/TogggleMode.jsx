import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const TogggleMode = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <button onClick={toggleTheme} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                Change Theme
            </button>
        </div>
    );
};

export default TogggleMode;
