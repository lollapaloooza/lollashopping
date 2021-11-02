import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {cartAddItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item}) => {
    const {name, price, imageUrl} = item;
    const dispatch = useDispatch();

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className='collection-footer'>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
            </div>
            <CustomButton onClick={()=>dispatch(cartAddItem(item))} inverted>Add to Cart</CustomButton>

        </div>
    )
}

export default CollectionItem;