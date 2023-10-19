import React, { useState } from 'react';
import CopierInfo from '../../assets/images/products/copierInfo.json';

function ProductInfo({ selectedItem }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='content'>
      <ul>
        <li className='image'>  
            {selectedItem.image}
        </li>
        <li className='brand'>  
            {selectedItem.brand}
        </li>      
        <li className='subCategory'>  
            {selectedItem.subCategory}
        </li>        
        <li className='modelnum'>  
            {selectedItem.modelnum}
        </li>
        <li className='specifications'>  
            {selectedItem.color}
            {selectedItem.ppm}
            {selectedItem.specifications}
        </li>
        <li className='description'>  
            {selectedItem.description}
         </li>
      </ul>
    </div>
  );
}
export default ProductInfo;
