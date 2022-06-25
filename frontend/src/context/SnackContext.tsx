import axios from "axios";
import React, { createContext, useReducer } from "react";
import snackReducer, { snackStateType, SnanckType } from "./snackReducer";

type typeNode = {
  children: React.ReactNode;
};

type SnackContextType = {
  snacksStock: SnanckType[];
  isLoading: boolean;
  getSnacks: () => {};
};

const initialState: snackStateType = {
  snacksStock: [],
  isLoading: false,
};

const apiURL = "http://localhost:4000//";
const apiToken = "33b55673-57c7-413f-83ed-5b4ae8d18827";
const api = axios.create({
  baseURL: apiURL,
  headers: { Authorization: `Bearer ${apiToken}` },
});

const SnackContext = createContext({} as SnackContextType);

export const SnackProvider = ({ children }: typeNode) => {
  const [{ snacksStock, isLoading }, dispatch] = useReducer(
    snackReducer,
    initialState
  );

  const setLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const getSnacks = async () => {
    setLoading();
    try {
      const { data } = await api.get("snacks");
      dispatch({ type: "GET_SNACKS", payload: data });
    } catch (error) {
      throw console.log(error);
    }
  };

  return (
    <SnackContext.Provider value={{ snacksStock, isLoading, getSnacks }}>
      {children}
    </SnackContext.Provider>
  );
};

export default SnackContext;
