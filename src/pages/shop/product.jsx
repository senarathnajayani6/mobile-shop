import "./shop.css";

export const Product = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div className="product" onClick={props.onClick}>
      <img src={productImage} alt="" />
      <div className="discription">
        <p className="productName">{productName}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};
