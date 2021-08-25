import {createContext, useReducer} from 'react';
import {reducer} from "./reducer";

export const ShopContext = createContext()

const initialState = {
    items: [],
    loading: true,
    order: [],
    basketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispach] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispach({type: 'CLOSE_ALERT'})
    }
    value.removeFromBasket = (itemId) => {
        dispach({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    value.handleBasketShow = () => {
        dispach({type: 'HANDLE_BASKET_SHOW'})
    }
    value.addElement = (itemId) => {
        dispach({type: 'ADD_ELEMENT', payload: {id: itemId}})
    }
    value.removeElement = (itemId) => {
        dispach({type: 'REMOVE_ELEMENT', payload: {id: itemId}})
    }
    value.addToBasket = (good) => {
        dispach({type: 'ADD_TO_BASKET', payload: good})
    }
    value.getItem = (data) => {
        dispach({type: 'GET_ITEM', payload: data})
    }

    return (<ShopContext.Provider value={value}> {children}</ShopContext.Provider>)
}