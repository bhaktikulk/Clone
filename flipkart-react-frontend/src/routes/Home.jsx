import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const products = useSelector((state) => state.items);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />

      <div className="product-list">
        {filteredProducts.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
