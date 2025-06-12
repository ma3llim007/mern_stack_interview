import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    let items;
    try {
        let localItems = localStorage.getItem(key);
        items = localItems ? JSON.parse(localItems) : initialValue;
    } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
        items = initialValue;
    }
    const [theme, setTheme] = useState(items);

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(theme));
        } catch (error) {
            console.warn(`Error writing localStorage key "${key}":`, error);
        }
    }, [key, theme]);

    return { theme, setTheme };
};

export default useLocalStorage;
