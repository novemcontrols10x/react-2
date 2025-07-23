import { createContext, useState } from "react";


export const MyContext = createContext()


export const ContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (

        <MyContext.Provider value={{ theme, toggleTheme }}>

            {children}

        </MyContext.Provider>
    )
}