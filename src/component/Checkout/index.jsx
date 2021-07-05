import React, { useState, useContext, useEffect } from "react";
import { FoodContext } from "../../context/FoodProvider";
import nonveglogo from "../../assets/image/nonveg.png";
import veglogo from "../../assets/image/veg.png";
import FormofLogin from "../form/form";
import * as userService from "../../services/userService";
import { useHistory } from "react-router-dom";
import Tip from "./tip";
// import AddressForm from "../form/Address";

const Checkout = () => {
  const history = useHistory();
  const [tipPage, setTippage] = useState(false);
  const [change, setChange] = useState(2);
  const foodContext = useContext(FoodContext);
  const [msg, setmsg] = useState("");
  const { cart, checkout, setcheckout, user } = foodContext;
  const subTotal = (pr) => {
    let r = pr.reduce((a, c) => a + c.price * c.quantity, 0);
    return r.toFixed(2);
  };
  const [data, setdata] = useState({
    date: new Date().toLocaleString(),
    total: Math.round(subTotal(cart)),
    order: null,
    order_generate: false,
    note: null,
    tip: 5,
    address: null,
    takeaway: false,
    items: [...cart],
  });
  const changelocation = () => {
    history.push("/");
  };

  useEffect(async () => {
    const { data: d } = await userService.checkout(data);
    setcheckout(d);
  }, [data]);

  const changeState = (i) => {
    setChange(i);
  };
  const changeL = () => {
    if (!checkout[0].total_pay) {
      history.push("/not-found");
    }
  };
  changeL();
  const settip = (p) => {
    setTippage(false);
    setdata({ ...data, tip: p });
    console.log(p);
  };
  return (
    <div className="checkout-container">
      <div className="left_panel">
        <div className="arrow-icon" onClick={() => changelocation()}>
          <i class="fa fa-arrow-left" aria-hidden="true" />
        </div>
        {user ? (
          <p>{user.first_name}</p>
        ) : (
          <>
            <h5>Account</h5>
            {change === 1 ? (
              <FormofLogin />
            ) : (
              <>
                <p>
                  To Place your order now, log in to your existing account or
                  sign up.
                </p>
                <div className="button">
                  <button
                    className="btn tologin"
                    onClick={() => changeState(1)}
                  >
                    LOGIN/SIGNUP
                  </button>
                  <button className="btn toquick-payment">
                    <i class="fa fa-edge" aria-hidden="true"></i> Quick Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}
        <h5 onClick={() => changeState(2)}>How would you like to get it?</h5>
        {user && change === 2 ? (
          <div className="button">
            <button className="btn tologin" onClick={() => changeState(3)}>
              Take Away
            </button>
            <button className="btn toquick-payment">
              <i class="fa fa-home" aria-hidden="true"></i> Get Delivered
            </button>
          </div>
        ) : (
          ""
        )}
        {/* <AddressForm /> */}
        <h5>Payment</h5>
        {change === 3 ? (
          <div className="button">
            <button className="btn tologin" onClick={() => changeState(3)}>
              Complete Payment
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="right_panel">
        <h3>CHECKOUT</h3>
        <div className="cart-items">
          {cart.map((a, b) => (
            <div className="cart-item" key={b + "jhj"}>
              <div className="img">
                <img src={a.is_veg ? veglogo : nonveglogo} alt={a.name} />
              </div>
              <div className="name">{a.name}</div>
              <div className="price">
                $ {a.price} X {a.quantity}
              </div>
              {/* <div className="numteofitem"></div> */}
              <div className="amount">{a.quantity * a.price}</div>
            </div>
          ))}
        </div>
        <div className="box-to-suggestion">
          <i class="fa fa-smile-o" aria-hidden="true" />
          <input
            placeholder={"Any Suggestion for your order ?"}
            value={msg}
            onChange={(e) => setmsg(e.currentTarget.value)}
          />
          <i
            class="fa fa-envelope"
            aria-hidden="true"
            onClick={() => setdata({ ...data, note: msg })}
          ></i>
        </div>
        <h6>Bill Details</h6>
        <div className="item-total">
          <div>Item Total</div>
          <div>$ {checkout[0].item_total}</div>
        </div>
        <div className="Delivery-Charge">
          <div>Delivery Charge</div>
          <div>$ {checkout[0].delivery_charge}</div>
        </div>
        <div className="Tax">
          <div>Tax</div>
          <div>$ {checkout[0].tax}</div>
        </div>
        <div className="Tip">
          <div>Tip</div>
          <div className="boxb" onClick={() => setTippage(true)}>
            <i class="fa fa-compass" aria-hidden="true" /> $ {checkout[0].tip}
          </div>
        </div>{" "}
        <div className="hr"></div>
        <div className="total_pay">
          <div>Total Pay</div>
          <div>$ {checkout[0].total_pay}</div>
        </div>
      </div>
      {tipPage ? (
        <Tip close={() => setTippage(false)} submittip={(p) => settip(p)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
