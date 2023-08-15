import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage}></img>
      <div className="discription">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
