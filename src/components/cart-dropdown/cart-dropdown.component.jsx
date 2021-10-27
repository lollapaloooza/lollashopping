import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import {cartToggleHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, dispatch, history}) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ?
                <div className='cart-items'>
                    {
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    }
                </div>
                : <span className='empty-message'>Your cart is empty</span>
        }

       <CustomButton onClick={()=> {
           history.push('/checkout');
           dispatch(cartToggleHidden());
       }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));