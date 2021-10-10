import {cartActionTypes} from "./cart.types";
const {CART_TOGGLE_HIDDEN} = cartActionTypes;


export const cartToggleHidden = () => ({
    type: CART_TOGGLE_HIDDEN,
})