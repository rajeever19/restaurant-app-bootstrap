import React from "react";
import img from "../../assets/image/paneer.jpg";
import AddButton from "../Form/inputbtn/AddButton";
import "./product.css";

const ProductList = ({ pdetails, handleCart, num, logo }) => {
  const { name, description: details, price } = pdetails;

  let quantity = num ? num.quantity : "";

  return (
    <div className="d-flex my-4">
      <div className="prod_img p-2">
        <img src={img} className="" alt="paneer" />
      </div>

      <div className="prod_desc flex-grow-1">
        <div className="prod_desc_title">
          <img src={logo} alt="veg icon" />
          {name}
        </div>

        <div className="prod_desc_details">{details}</div>
        <div className="prod_desc_price">$ {price}</div>
      </div>

      <div className={"prod_btn"}>
        <AddButton value={quantity ? quantity : ""} onChange={handleCart} />
      </div>
    </div>
  );
};

export default ProductList;
