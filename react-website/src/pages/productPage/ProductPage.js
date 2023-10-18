import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({}); // You can define filter options here

  useEffect(() => {
    // Simulate fetching product data from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch('api/products');
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
    setFilteredProducts(filtered);
  };

  return (
    <div className="content">
<<<<<<< Updated upstream
      <div className="product-container">
        <h2>Products page is a work in progress! Check in next week</h2>
=======
      <h2>Products page is a work in progress! Check in next week</h2>

      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="filters">
        {/* Filter components here */}
>>>>>>> Stashed changes
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default ProductPage;
