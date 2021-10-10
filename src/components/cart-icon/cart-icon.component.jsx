import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({cartToggleHidden}) => (
    <div className='cart-icon' onClick={cartToggleHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: ()=>dispatch(cartToggleHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);