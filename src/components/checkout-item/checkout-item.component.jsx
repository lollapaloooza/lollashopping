import './checkout-item.styles.scss';
import {connect} from "react-redux";
import {clearItemFromCart, cartRemoveItem, cartAddItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {quantity, name, price, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(cartAddItem(item)),
    removeItem: item => dispatch(cartRemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);