import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {cartAddItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, cartAddItem}) => {
    const {name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className='collection-footer'>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
            </div>
            <CustomButton onClick={()=>cartAddItem(item)} inverted>Add to Cart</CustomButton>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cartAddItem: item => dispatch(cartAddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);