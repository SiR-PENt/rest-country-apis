import React, { createContext, useEffect, useState, useContext } from "react";

const appContext = createContext();

export default function AppProvider({children}) {

    const [darkTheme, setDarkTheme] = useState(undefined);

      useEffect(() => {
         if (darkTheme !== undefined) {
           if (darkTheme) {
             document.documentElement.setAttribute("data-theme", "dark");
             window.localStorage.setItem("theme", "dark");
           } else {
             document.documentElement.removeAttribute("data-theme");
             window.localStorage.setItem("theme", "light");
           }
         }
       }, [darkTheme]);

       useEffect(() => {
         const root = window.document.documentElement;
         const initialColorValue =
           root.style.getPropertyValue("--initialColorMode");
         setDarkTheme(initialColorValue === "dark");
       }, []);

       return (
          <appContext.Provider value={{darkTheme, setDarkTheme}}>{children}</appContext.Provider>
       )
}

export const useGlobalContext = () => {
    return useContext(appContext);
}