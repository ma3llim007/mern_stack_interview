import { createContext } from "react";

const initialState = {
    theme: "light",
    toggleTheme: () => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;
