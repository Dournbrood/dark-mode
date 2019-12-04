

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

    useEffect(() => {
        if (darkMode === true) {
            let element = document.querySelector("body");
            element.classList.add("dark-mode");
        }
        else {
            let element = document.querySelector("body");
            element.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}