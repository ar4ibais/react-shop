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
    value.handleBusketShow = () => {
        dispatch({ type: "TOGGLE_BUSKET" })
    }
    value.incQuantity = (itemId) => {
        dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } })
    }
    value.decQuantity = (itemId) => {
        dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } })
    }
    value.addToBusket = (item) => {
        dispatch({ type: "ADD_TO_BUSKET", payload: item })
    }
    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data })
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}