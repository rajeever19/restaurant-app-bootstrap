import React, { Component, useContext, useState } from "react";
import img from "../../assets/image/cart.png";
import CartElement from "./CartElement";
import { FoodContext } from "../../context/FoodProvider";
import { useHistory } from "react-router-dom";
import * as userService from "../../services/userService";

const Cart = () => {
  const foodContext = useContext(FoodContext);
  const history = useHistory();
  const [loading, setload] = useState(false);
  const { cart: prodCart, deleteallitemtocart, setcheckout } = foodContext;

  const subTotal = (pr) => {
    let r = pr.reduce((a, c) => a + c.price * c.quantity, 0);
    return r.toFixed(2);
  };

  const gotoCheckout = async () => {
    try {
      setload(true);
      console.log("fdjalsjf");
      const { data } = await userService.checkout({
        date: new Date().toLocaleString(),
        total: Math.round(subTotal(prodCart)),
        order: null,
        order_generate: false,
        note: null,
        tip: 5,
        address: null,
        takeaway: false,
        items: [...prodCart],
      });
      // console.log(data, "rajajfda");
      setload(false);
      setcheckout(data);
      history.push("/checkout");
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        console.log(ex.response);
      }
    }
  };

  if (prodCart.length <= 0) {
    return (
      <div className="row text-center px-3">
        <div className="col-10 cart_empty text-center py-3 text-wrap text-capitalize">
          <p className="">Feeling hungry? click on Add Button</p>
          <img src={img} alt="cart" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="product_cart animate__zoomIn">
        <div className="d-flex  justify-content-between">
          <div className="">
            <h2>Cart</h2>
            <div className="text-secondary">{prodCart.length} ITEM</div>
          </div>
          <div className="icon p-3 " onClick={deleteallitemtocart}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        {prodCart.map((p, i) => (
          <CartElement prod={p} key={i} />
        ))}
        <div className="sub-total">
          <div className="sub-total-header ">
            <div>Subtotal</div>
            <div className="total-amount">$ {subTotal(prodCart)}</div>
          </div>
          <div className="p">Extra Charges may apply</div>
        </div>
        <div className="SUB_mit">
          <button
            className="btn btn-block btnab"
            onClick={() => gotoCheckout()}
          >
            {!loading ? (
              "Checkout"
            ) : (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </div>
      </div>
    );
  }
};

export default Cart;
