import './collection-overview.styles.scss';
import {useSelector} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div className='collection-overview'>
            {
                collections
                    .map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
            }
        </div>
    )
}


export default CollectionsOverview;