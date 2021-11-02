import './checkout-item.styles.scss';
import {useDispatch} from "react-redux";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const dispatch = useDispatch();

    const {quantity, name, price, imageUrl} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItem(cartItem))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;