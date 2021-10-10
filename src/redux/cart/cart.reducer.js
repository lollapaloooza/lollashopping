import {cartActionTypes} from "./cart.types";
import {cartAddItem} from "./cart.utils";

const {CART_TOGGLE_HIDDEN, ADD_ITEM} = cartActionTypes;

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: cartAddItem(state.cartItems, action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;