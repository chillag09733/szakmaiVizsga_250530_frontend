import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/myAxios";

export const apiContext = createContext("");
export const ApiProvider = ({ children }) => {
    const [szoList, setSzoList] = useState([]);
    const [temaList, setTemaList] = useState([]);

    const getAdat = async (vegpont, callBack) => {
        const { data } = await axios.get(vegpont);
        callBack(data);
    }

    useEffect(() => {
        getAdat("/szos", setSzoList);
        getAdat("/temas", setTemaList);
    }, [])

    return (
        <apiContext.Provider value={{ szoList, setSzoList, temaList, setTemaList, getAdat }}>
            {children}
        </apiContext.Provider>
    )
}

export default function useApiContext() {
    return useContext(apiContext)
}