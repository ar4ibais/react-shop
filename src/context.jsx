import { createContext, useReducer } from "react";
import { Reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBusketShow: false,
    alertName: ''
}

export const ContextPrivider = ({ children }) => {
    const [value, dispatch] = useReducer(Reducer, initialState)

    value.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" })
    }
    value.removeFromBusket = (itemId) => {
        dispatch({ type: "REMOVE_FROM_BUSKET", payload: { id: itemId } })
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}