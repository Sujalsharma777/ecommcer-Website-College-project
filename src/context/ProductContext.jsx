import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import data from "../data.json";
import reducer from "../Reducer/ProductReducer"
const AppContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    latestArrived: [],
};
const AppProvider = ({ children }) => {
    const API = data;
    const [states, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (URL) => {
        dispatch({ type: "Loading_Api" });
        try {
            const res = await axios.get(URL);
            const products = res.config.url;
            console.log(products)
            dispatch({ type: "Set_Api_Data", payload: products })
        } catch (error) {
            dispatch({ type: "Api_Error" });
        }
    };
    useEffect(() => {
        getProducts(API);
    }, []);
    return (
        <AppContext.Provider value={{ ...states }}>
            {children}
        </AppContext.Provider>
    );
};
const useProductContext = () => {
    return useContext(AppContext)
};
export { AppProvider, AppContext, useProductContext }
