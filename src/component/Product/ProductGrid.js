import React from "react";
import img from "../../assets/image/paneer.jpg";
import "./product.css";
import AddButton from '../Form/inputbtn/AddButton';

const ProductList = ({ pdetails, handleCart, num, logo }) => {
  const { name, description: details, price } = pdetails;

  let quantity = num ? num.quantity : "";

  return (
    <div className="d-flex my-4 col-6 row">
      <div className="prod_img2 col-12">
        <img src={img} className="" alt="paneer" />
      </div>

      <div className="prod_desc col-12">
        <div className="prod_desc_title">
          <img src={logo} alt="veg icon" />
          {name}
        </div>
        <div className="prod_desc_details col-12">{details}</div>
        <div className="prod_desc_price">$ {price}</div>
      </div>

      <div className="prod_btn d-flex">
        <AddButton value={quantity ? quantity : ""} onChange={handleCart} />
      </div>
    </div>
  );
};

export default ProductList;
