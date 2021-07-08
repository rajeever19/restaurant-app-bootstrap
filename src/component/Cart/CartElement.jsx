import React, { useContext } from "react";
import img1 from "../../assets/image/veg.png";
import img2 from "../../assets/image/nonveg.png";
import { FoodContext } from "../../context/FoodProvider";

const CartElement = ({ prod }) => {
  const foodContext = useContext(FoodContext);
  const { deleteitemtocart, increaseitemtocart, decreaseitemtocart } =
    foodContext;
  const handleInput = (i) => {
    console.log(i);

    if (quantity === 1 && i < 0) {
      deleteitemtocart(prod.id);
      return;
    }
    if (i > 0) {
      increaseitemtocart(prod.id);
      return;
    }
    if (i < 0) {
      decreaseitemtocart(prod.id);
      return;
    }
  };

  const { name, quantity, price, id ,is_veg} = prod;
  return (
    <div className="cart_elements animate__fadeInDownBig">
      <div className="veg-icon">
        <img src={is_veg?img1:img2} alt="icon" />
      </div>
      <div className="prod-name ">{name}</div>
      <div className="prod-btn">
        <span className="plus btn-t" onClick={() => handleInput(1)}>
          +
        </span>
        <span className="value btn-t">{quantity}</span>
        <span className="minus btn-t" onClick={() => handleInput(-1)}>
          -
        </span>
      </div>
      <div className="price ">$ {(quantity * price).toFixed(2)}</div>
      <div className="delete_prod btn-t" onClick={() => deleteitemtocart(id)}>
        x
      </div>
    </div>
  );
};

export default CartElement;
