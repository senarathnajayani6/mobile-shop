import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product, onClose }) => {
  const { productName, price, productImage, description, details } = product;

  const detailsList = details.split(", ");

  return (
    <div className="product-details-overlay">
      <div className="product-details">
        <div className="product-details-header">
          <h2>{productName}</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="product-details-content">
          <div className="product-details-image">
            <img src={productImage} alt={productName} />
          </div>
          <div className="product-details-info">
            <p className="price">${price}</p>
            <p>{description}</p>
            <div className="details-list">
              <ul>
                {detailsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
