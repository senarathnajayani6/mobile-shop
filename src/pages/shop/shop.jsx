import React, { useState } from "react";
import { PRODUCTS_2 } from "../../products";
import { Product } from "./product";
import ProductDetails from "./product-details";
import "./shop.css";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products">
      <div className="products">
        {PRODUCTS_2.map((product) => (
          <Product key={product.id} data={product} onClick={() => handleProductClick(product)} />
        ))}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={closeProductDetails} />}
    </div>
  );
};

export default Shop;
