import { createContext, useState } from "react";

export const ThemeContext = createContext()


export const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme)
    }

    const theme = {
        darkTheme,
        toggleTheme
    }


    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

