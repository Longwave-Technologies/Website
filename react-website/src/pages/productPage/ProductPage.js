import React, { useState, useEffect, useRef } from "react";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";
import ProductList from "./ProductList";
import Category from "../../assets/images/products/productCategories.json";
import CopierInfo from "../../assets/images/products/copierInfo.json";
import { filter } from "lodash"; //checkboxes

function ProductPage() {
  const [products, setProducts] = useState(CopierInfo);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [filters, setFilters] = useState([]); // You can define filter options here
  const [filteredProducts, setFilteredProducts] = useState(CopierInfo); //Search

  const [superParentUpdatePopup, setSuperParentUpdatePopup] = useState(false);

  // Callback function to update the class name
  const updateSuperParentUpdatePopup = (newPopup) => {
    setSuperParentUpdatePopup(newPopup);
  };

  // useEffect(() => {
  //   // Simulate fetching product data from an API
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(CopierInfo);
  //       console.log(response);
  //       const data = await response.json();
  //       setProducts(data);
  //       setFilteredProducts(data);
  //       setSelectedProductDetail(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const handleFilterChange = (filterCategory, value) => {
    // Update filter values
    const updatedFilters = filters?.map((key, i) => {
      //if key, find value --> if value, filter it out. else add value
      //if !key, add key and value

      if (key === filterCategory) {
        // {key:[...filters.key,value]}
        // ({filterCategory:[value]})
        // {filters.filter((key) => {})}
      } else {
        return [...filters, { filterCategory, value }];
      }
    });
    console.log("filters array: ", filters, "size: ", filters.length);

    setFilters(updatedFilters);

    // Apply filters to products
    const filtered = products.filter((product) => {
      // Implement your filtering logic here based on filter values
      return (
        !updatedFilters.filterCategory ||
        product.filterCategory === updatedFilters.filterCategory
        // && (!updatedFilters.color || product.color === updatedFilters.color)
      );
    });
    setFilteredProducts(filtered);
    // console.log("filters" ,filters, "size ", filters.length);
    // console.log("filteredProducts" , filteredProducts, "size ", filteredProducts.length);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = CopierInfo.filter(
      (product) =>
        product.parts?.toLowerCase().includes(query?.toLowerCase()) ||
        product.modelnum?.toLowerCase().includes(query?.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query?.toLowerCase()) ||
        product.subCategory?.toLowerCase().includes(query?.toLowerCase())
    );
    return setFilteredProducts(filtered);
  };

  const uppercaseFirst = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="content">
      <Fade>
        <div className={"product-container-parent"}>
          {!superParentUpdatePopup ? (
            <div className={"left-container-parent"}>
              <div className={"productSearch-parent"}>
                <input
                  type="search"
                  id="mySearch"
                  name="q"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              {/* <div className="productFilter">
            {Category?.map((obj, index) => (
              <ul className="filterSubheading" key={obj.id}>{uppercaseFirst(Object.keys(obj))}
              {obj[Object.keys(obj)].map((item,i)=>(
                <li key={item}>
                <label>
                  <input type="checkbox" key={item.id} 
                    value={item}
                    onChange={() => handleFilterChange(Object.keys(obj).toString(),item)}
                  />
                    <span>{uppercaseFirst(item)}
                    </span>
                  </label>
                </li>
              ))}
              </ul>
            )) }
            <button type="submit">Clear filters</button>
          </div> */}
            </div>
          ) : (
            ""
          )}
          <ProductList
            products={filteredProducts}
            updatePopup={updateSuperParentUpdatePopup}
          />
        </div>
      </Fade>
    </div>
  );
}
export default ProductPage;
