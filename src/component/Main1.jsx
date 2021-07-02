import React, { useContext, useHistory, useEffect,useState } from "react";
import Banner from "./Banner/Banner";
import Categories from "./categories/Categories";
import Searchbox from "./common/searchbtn/Searchbtn";
import Cart from "./cart/cart";
import { FoodContext } from "../context/FoodProvider";
import Products from "./product/Products";

const Main1 = () => {
  const foodContext = useContext(FoodContext);
  const { cart: cp, foods } = foodContext;
const [smodel,setmodel]=useState(true)
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

          <div className="dropdown">
            {/* <Dropdown
                items={cate}
                selectedItem={this.state.selectedCategories}
                onItemSelect={this.handleCategorySelect}
              /> */}
          </div>
          <Products />
        </div>
        <div className="d-none d-sm-inline col-sm-4 ">
          <Cart prodCart={cp} />
        </div>
      </div>
      <div className="bottom-btn">
        <div className="desc">
          {cp.length} item | ${" "}
          {cp.reduce((a, c) => a + c.price * c.numberOfItem, 0)}
        </div>
        <button className="btn">
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i> continue
        </button>
      </div>
      {/* <Model /> */}
    </>
  );
};

export default Main1;
