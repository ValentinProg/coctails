import React, { useState, useContext, useEffect, useCallback } from "react";
import { createContext } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   <AppContext.Provider value="hello">{ children }</AppContext.Provider>;
// };

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext } 

