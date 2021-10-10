import {cartActionTypes} from "./cart.types";
const {CART_TOGGLE_HIDDEN,ADD_ITEM} = cartActionTypes;


export const cartToggleHidden = () => ({
    type: CART_TOGGLE_HIDDEN,
})

export const cartAddItem = item => ({
    type: ADD_ITEM,
    payload: item
})