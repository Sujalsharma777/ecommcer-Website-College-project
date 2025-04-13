import { createContext } from "react";
const AppContext = createContext();
const AppProvider = ({ Children }) => {
    return <AppContext.Provider value="sujal">
        {Children}
    </AppContext.Provider>
};
export { AppProvider }

