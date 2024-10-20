import './index.css';
import data from '../../mock.json';

const ImageCard = () => {

    return (
        <ul className="nursery-list">
            {
                data.nurseryList.map(eachItem => (
                    <li key={eachItem.id}>
                        <img src={eachItem.nurseryImage} alt="nurseryImage" className="nursery-img"/>
                        <p className="image-des">{eachItem.nurseryReview}</p>
                    </li>
                ))
            }
        </ul>
    );

}
export default ImageCard