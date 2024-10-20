import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import AddToCartModal from '../AddToCartModal';
import RemoveFromCartModal from '../RemoveFromCartModal';

const PlantCard = (props) => {
    const { eachItem } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    const history = useHistory();

    const StarRating = () => {
        const rating = parseFloat(eachItem.productRating);

        // Function to render stars
        const renderStars = () => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars.push(<FaStar key={i} />);
                } else if (i - 0.5 === rating) {
                    stars.push(<FaStarHalfAlt key={i} />);
                } else {
                    stars.push(<FaRegStar key={i} />);
                }
            }
            return stars;
        };

        return (
            <div className="star-rating">
                {renderStars()}
            </div>
        );
    }

    // redirect to thank you page.
    const viewProduct = () => {
        history.push(`/thank-you/${eachItem.id}`);
    }

    const addToCart = () => {
        setIsModalOpen(true);
    }

    const removeFromCart = () => {
        setIsRemoveModalOpen(true);
    }

    const handleConfirm = () => {
        const itemCountString = localStorage.getItem('cartItemCount');
        let itemCount = parseInt(itemCountString);
        itemCount = itemCount + 1;
        localStorage.setItem('cartItemCount', itemCount);
        setIsModalOpen(false);
    };

    const handleRemoveConfirm = () => {
        const itemCountString = localStorage.getItem('cartItemCount');
        let itemCount = parseInt(itemCountString);
        itemCount = itemCount - 1;
        if (itemCount < 0) {
            itemCount = 0;
        }
        localStorage.setItem('cartItemCount', itemCount);
        setIsRemoveModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsRemoveModalOpen(false);
    };


    return (
        <li key={eachItem.id}>
            <div className="image-card">
                <img src={eachItem.image} alt="image" className="plant-img" />
                <button className="view-product" onClick={viewProduct}>View Product</button>
            </div>
            <h1 className="plant-name">{eachItem.plantName}</h1>
            <p className="image-des">{eachItem.plantType}, {eachItem.maintenance}</p>
            <div className="start-box">
                <StarRating />
                <p className="rating-number">{eachItem.productRating}</p>
            </div>
            <div className="price">
                <p className="image-decr">₹{eachItem.price}</p>
                <p className="image-desc">₹{eachItem.salePrice}</p>
            </div>
            <div className="plant-card-button">
                <div className="add-button-box">
                    <button className="add-button" onClick={removeFromCart}>-</button>
                    Add to cart
                    <button className="add-button" onClick={addToCart}>+</button>
                </div>
                <AddToCartModal
                    isOpen={isModalOpen}
                    title="Confirm Add Action"
                    name={eachItem.plantName}
                    type={eachItem.plantType}
                    price={eachItem.price}
                    message="Are you sure you want to add this item to cart?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <RemoveFromCartModal
                    isRemoveOpen={isRemoveModalOpen}
                    title="Confirm Remove Action"
                    name={eachItem.plantName}
                    type={eachItem.plantType}
                    price={eachItem.price}
                    message="Are you sure you want to remove this item from cart?"
                    onRemoveConfirm={handleRemoveConfirm}
                    onRemoveCancel={handleCancel}
                />
                <div className="buy-button-box">
                    <button className="buy-button">Buy on Rent</button>
                </div>
            </div>
        </li>
    )
}
export default PlantCard;