import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(products);
  const [clicked, setClicked] = useState(false)

  const handleProductClick = (product) => {
    setClicked(true);
    alert(product.target.value)
    setSelectedProduct(product);
  };


  useEffect(() => {
    // Fetch product data from a JSON file or API
    // Example: fetch('path-to-your-api-or-json-file')
    // .then(response => response.json())
    // .then(data => setProducts(data));
  }, []);

  return (
    <div className="productList">
        <ProductInfo className="productInfo"
            key={selectedProduct.id}
            product={selectedProduct}
            onSelect={selectedProduct}
        />
      {selectedProduct?.map((selectedProduct) => (
        <ul className="productListDetails"  key={selectedProduct.id} 
        > 
          <li>{selectedProduct.image}</li>
          <li>{selectedProduct.brand} {selectedProduct.subCategory}</li>
          <li>{selectedProduct.modelnum}</li>
 
        </ul>
      ))}
      
     </div>
  );
}

export default ProductList;
