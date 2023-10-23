import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import CopierInfo from '../../assets/images/products/copierInfo.json';
import Category from '../../assets/images/products/productCategories.json';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    console.log('object:',typeof(product));
  };

  const handleExit = () => {
    setSelectedProduct(null);
  };

  // Filtering and searching logic
  const filteredProducts = products.filter((product) => {
    return (
    
      (filter === "" || product.brand === filter) &&
      (search === "" ||
        product.brand?.toLowerCase().includes(search?.toLowerCase()))
      

    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button onClick={() => handleFilter("Category 1")}>Filter Category 1</button>
        <button onClick={() => handleFilter("Category 2")}>Filter Category 2</button>
      </div>

      {selectedProduct ? (
        <div>
          <h2>Product Details</h2>
          <ul className='productListDetails'>
            <li>{selectedProduct[Object.keys(selectedProduct)].image}</li>
            <li>{selectedProduct[Object.keys(selectedProduct)].brand} {selectedProduct[Object.keys(selectedProduct)].subCategory}</li>
            <li>{selectedProduct[Object.keys(selectedProduct)].modelnum}</li>
            <li>{selectedProduct[Object.keys(selectedProduct)].ppm}</li>
            <li>specifications:</li>
            <ul>     
               <li> {
              (Object.entries(selectedProduct[Object.keys(selectedProduct)].specifications).map(([key,value]) => (
              <li key={key}> {key}: {value}
              </li>
              )))
            }
            </li>
            </ul>
            <li>Toners:</li>
            <ul>     
               <li> {
              (Object.entries(selectedProduct[Object.keys(selectedProduct)].toners).map(([key,value]) => (
              <li key={key}> {key}: {value}
              </li>
              )))
            }
            </li>
            </ul>
          </ul>
          <p>Description: {selectedProduct[Object.keys(selectedProduct)].description}</p>
          <button onClick={handleExit}>Return to List</button>
        </div> 
      ) : (
        <div>
          {filteredProducts?.map((product) => ( 
            <ul className="productListDetails"  key={product.id} 
              onClick={() => handleSelectProduct({product})}            
              style={{ cursor: "pointer" }}
            > 
              <li key={product.id}>{product.image}</li>
              <li key={product.id}>{product.brand} {product.subCategory}</li>
              <li key={product.id}>{product.modelnum}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
