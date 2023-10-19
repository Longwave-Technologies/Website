import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    // Fetch product data from a JSON file or API
    // Example: fetch('path-to-your-api-or-json-file')
    // .then(response => response.json())
    // .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <ul>
        {products?.map((selectedProduct) => (
          <ProductInfo
            key={selectedProduct.id}
            product={selectedProduct}
            onSelect={handleProductClick}
          />
        ))}
      </ul>
      <ProductInfo selectedItem={selectedProduct} className="productInfo" />

     </div>
  );
}

export default ProductList;
