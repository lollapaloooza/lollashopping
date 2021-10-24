import {cartActionTypes} from "./cart.types";
const {CART_TOGGLE_HIDDEN,ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM} = cartActionTypes;


export const cartToggleHidden = () => ({
    type: CART_TOGGLE_HIDDEN,
})

export const cartAddItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const cartRemoveItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})