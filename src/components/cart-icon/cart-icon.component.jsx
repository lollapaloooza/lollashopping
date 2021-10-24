import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({cartToggleHidden, itemCount}) => (
    <div className='cart-icon' onClick={cartToggleHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: ()=>dispatch(cartToggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);