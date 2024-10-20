import React, { useState, useEffect } from 'react';
import './index.css';
import data from '../../mock.json';
import PlantCard from '../PlantCard';
import AddToCartModal from '../AddToCartModal';

const PlantList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const limit = 6;

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const itemCountString = localStorage.getItem('cartItemCount');
        let itemCount = 0;
        if (itemCountString !== NaN) {
            itemCount = parseInt(itemCountString);
            localStorage.setItem('cartItemCount', itemCount);
        } else {
            localStorage.setItem('cartItemCount', 0);
        }
        
        const products = data.productList.filter(eachItem => (eachItem.id <= limit));
        setProductList(products);
      }, []);
    
      const prevPage = () => {
          let newPageNumber = pageNumber - 1;
          if (newPageNumber <= 0) {
            newPageNumber = 1;
          }
          setPageNumber(newPageNumber);
          const products = data.productList.filter(eachItem => (eachItem.id > limit * (newPageNumber - 1) && eachItem.id <= limit * newPageNumber));
          setProductList(products);
      }

      const nextPage = () => {
        let newPageNumber = pageNumber + 1;
        const id = data.productList[data.productList.length-1].id;
        if ((newPageNumber-1)* limit > id) {
            newPageNumber = newPageNumber - 1;
        }
        setPageNumber(newPageNumber);
        const products = data.productList.filter(eachItem => (eachItem.id > limit * (newPageNumber - 1) && eachItem.id <= limit * newPageNumber));
        setProductList(products);
    }

    return (
        <div>
        <ul className="plant-list-item">
            {
                productList.map(eachItem => (
                            <PlantCard key={eachItem.id} eachItem={eachItem} />
                    )
                )
            }
        </ul>
        <AddToCartModal isItOpen= "true" />
        <div className ="view-more">
            <button className ="view-more-button" onClick={prevPage}> PREV </button>  { pageNumber} 
            <button className ="view-more-button" onClick={nextPage}> NEXT </button>
        </div>
        </div>

    )
}
export default PlantList;