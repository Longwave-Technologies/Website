import React, { useState } from 'react';
import CopierInfo from '../../assets/images/products/copierInfo.json';

function ProductInfo({ selectedItem }) {
  const [selectedProduct, setSelectedProduct] = useState(selectedItem);

  const handleExit = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='content'>
      <h2>Product Details</h2>
      {/* <ul>
        <li className='image'>  
            {selectedProduct.image}
        </li>
        <li className='parts'>  
            {selectedProduct.parts}
        </li>
        <li className='brand'>  
            {selectedProduct.brand}
        </li>      
        <li className='subCategory'>  
            {selectedProduct.subCategory}
        </li>        
        <li className='modelnum'>  
            {selectedProduct.modelnum}
        </li>
        <li className='specifications'>  
            {selectedProduct.color}
            {selectedProduct.ppm}
            {selectedProduct.specifications}
        </li>
      </ul>
      <p>Description: {selectedProduct.description}</p> */}
      <button onClick={handleExit}>Back</button>
    </div>
  );
}
export default ProductInfo;
