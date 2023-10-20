import React, { useState, useEffect, useRef } from "react";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";
import ProductInfo from './ProductInfo';
import ProductList from './ProductList';
import Category from '../../assets/images/products/productCategories.json';
import CopierInfo from '../../assets/images/products/copierInfo.json';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(Category); // You can define filter options here

  useEffect(() => {
    // Simulate fetching product data from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch(CopierInfo);
        console.log(response);//
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filterName, value) => {
    // Update filter values
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);

    // Apply filters to products
    const filtered = products.filter((product) => {
      // Implement your filtering logic here based on filter values
      return (
        (!updatedFilters.category || product.category === updatedFilters.category) &&
        (!updatedFilters.price || product.price <= updatedFilters.price)
      );
    });

    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(query.target.value);

    setFilteredProducts(filtered);
  };

  return (
    <div className="content">
      <div className="product-container">
        <div className="left-container">
          <div className="productSearch">
            <input
              type="search"
              id="mySearch"
              name="q"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value) }
            />
            <button>Search</button>
          </div>

          <div className="productFilter">
                {filters?.map((obj, index) => (
                  <ul className="filterSubheading">{Object.keys(obj)}
                  {obj[Object.keys(obj)].map((item,i)=>(
                    <li key={i}>
                    <label>
                      <input type="checkbox" />
                        <span>{item}
                        </span>
                      </label>
                    </li>
                  ))}
                  </ul>
                )) }
          </div>
        </div>
        <div className="right-container">
          {/* <ProductList className="productList"/> */}
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
