import React, { useContext } from "react";
import Banner from "../component/Banner/Banner";
import { FoodContext } from "../context/FoodProvider";
import Cart from "../component/Cart/Cart";
import Searchbox from "../component/common/Searchbox/Searchbox";
import Products from "../component/Product/Products";
import { Link } from "react-router-dom";
import Categories from "../component/Categories/Categories";

const Main1 = () => {
  const foodContext = useContext(FoodContext);
  const { cart: cp } = foodContext;
  return (
    <>
      <Banner />
      <div className="row">
        <div className="col-sm-2 d-none d-sm-inline px-2 category-cotainer position-relative">
          <Categories />
        </div>
        <div className="col-sm-6">
          <Searchbox />
          <br />
          {/* 
          <div className="dropdown">
            <Dropdown
                items={cate}
                selectedItem={this.state.selectedCategories}
                onItemSelect={this.handleCategorySelect}
              /> 
          </div>*/}
          <Products />
        </div>
        <div className="d-none d-sm-inline col-sm-4 ">
          <Cart prodCart={cp} />
        </div>
      </div>
      <div className="bottom-btn">
        <div className="desc">
          {cp.length} item | ${" "}
          {cp.reduce((a, c) => a + c.price * c.quantity, 0)}
        </div>
        <button className="btn">
          <i
            className="fa fa-cart-arrow-down border-light"
            aria-hidden="true"
          ></i>{" "}
          <Link to="/checkout"> continue</Link>
        </button>
      </div>
      {/* <Model /> */}
    </>
  );
};

export default Main1;
