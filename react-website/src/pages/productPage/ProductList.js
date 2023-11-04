import React, { useState, useEffect } from "react";
import CopierInfo from "../../assets/images/products/copierInfo.json";
import Category from "../../assets/images/products/productCategories.json";
import "./ProductList.css";

const images = require.context("../../assets/images/products", true);

const ProductList = ({ products, updatePopup }) => {
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
    updatePopup(true);
    setSelectedProduct(product);
    console.log("object:", typeof product);
  };

  const handleExit = () => {
    updatePopup(false);
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
    <div className="productListContainer">
      {selectedProduct ? (
        <div className="product-container-child">
          <div className="left-container-child">
            <img
              src={images(
                selectedProduct[Object.keys(selectedProduct)].image_path
              )}
              alt="pic"
            />
          </div>
          <div className="right-container-child">
            <h1 className="specs">
              {selectedProduct[Object.keys(selectedProduct)].brand}{" "}
              {selectedProduct[Object.keys(selectedProduct)].subCategory}{" "}
              {selectedProduct[Object.keys(selectedProduct)].modelnum}
            </h1>
            <ul className="specs">
              <li>{selectedProduct[Object.keys(selectedProduct)].ppm}</li>
              <li>
                {" "}
                {Object.entries(
                  selectedProduct[Object.keys(selectedProduct)].function
                ).map(([key, value]) => (
                  <li key={key.id}>
                    {" "}
                    {value[0].toUpperCase() + value.slice(1)}{" "}
                  </li>
                ))}
              </li>
              <li>
                {" "}
                {Object.entries(
                  selectedProduct[Object.keys(selectedProduct)].toners
                ).map(([key, value]) => (
                  <li key={key.id}>
                    {" "}
                    {key[0].toUpperCase() + key.slice(1)}: {value.toUpperCase()}{" "}
                  </li>
                ))}
              </li>
            </ul>
            <p className="specs">
              {selectedProduct[Object.keys(selectedProduct)].description}
            </p>
            <div className = 'buttonDiv'>
              <button onClick={handleExit}>Return to List</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="productList">
          {filteredProducts?.map((product) => (
            <ul
              className="productListDetails"
              key={product.id}
              onClick={() => handleSelectProduct({ product })}
              style={{ cursor: "pointer" }}
            >
              <li>
                <img src={images(product.image_path)} alt="images" />
              </li>
              <li>
                {product.brand} {product.subCategory}
              </li>
              <li>{product.modelnum}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
