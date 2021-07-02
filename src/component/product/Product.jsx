import React, {useContext,useEffect } from "react";
import img from "../../assets/image/paneer.jpg";
import logo from "../../assets/image/veg.png";
import logo1 from "../../assets/image/nonveg.png";
import Inputnumbtn from "../form/inputbtn/inputnumbtn";
import "./product.css";
import { FoodContext } from "../../context/FoodProvider";

const Product = ({ index, pdetails, view }) => {
  const foodContext = useContext(FoodContext);
  const {
    cart,
    additemtocart,
    deleteitemtocart,
    increaseitemtocart,
    decreaseitemtocart,
  } = foodContext;
  const { name, description: details, price, is_veg: ftype, id } = pdetails;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }, [cart]);

  let prodCart = [...cart];
  let num = prodCart.find((a) => pdetails.id === a.id);
  let quantity = num ? num.quantity : "";
  // console.log(quantity, pdetails.id);
  const handleInput = (i) => {
    console.log(i);
    if (!num) {
      additemtocart({ ...pdetails, quantity: 1 });
      return;
    }
    if (quantity === 1 && i < 0) {
      deleteitemtocart(pdetails.id);
      return;
    }
    if (i > 0) {
      increaseitemtocart(pdetails.id);
      return;
    }
    if (i < 0) {
      decreaseitemtocart(pdetails.id);
      return;
    }
  };

  return (
    <div className={view ? "d-flex my-4" : "col-5 row m-2"} key={index}>
      <div className={view ? "prod_img p-2" : "prod_img2 col-xs-12"}>
        <img src={img} className="" alt="paneer" />
      </div>

      <div
        className={
          view ? "prod_desc flex-grow-1" : "prod_desc flex-grow-1 col-12"
        }
      >
        <div className="prod_desc_title">
          <img src={ftype ? logo : logo1} alt="veg icon" />
          {name}
        </div>
        <div className="prod_desc_details">{details}</div>
        <div className="prod_desc_price">$ {price}</div>
      </div>
      <div className={"prod_btn"}>
        {quantity ? (
          <Inputnumbtn
            value={quantity ? quantity : ""}
            onChange={handleInput}
          />
        ) : (
          <button
            className="btn btn-xs btn-outline-danger"
            onClick={() => handleInput(1)}
          >
            + ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
