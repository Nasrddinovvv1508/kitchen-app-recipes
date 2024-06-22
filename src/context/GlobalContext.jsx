import { createContext, useEffect, useState } from "react"

export let GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    let [allRecipes, setAllRecipes] = useState(infoFromLocalStorage())


    function infoFromLocalStorage() {
        return JSON.parse(localStorage.getItem(`meal`)) || [];
    }

    useEffect(() => {
        localStorage.setItem(`meal`, JSON.stringify(allRecipes));
    }, [allRecipes]);

    return (
        <GlobalContext.Provider value={{ allRecipes, setAllRecipes }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider