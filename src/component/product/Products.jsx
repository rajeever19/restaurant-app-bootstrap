import React, { useEffect, useContext } from "react";
import { getProducts } from "../../services/foodService";
import { FoodContext } from "../../context/FoodProvider";
import Product from "./Product";
const Products = () => {
  const foodContext = useContext(FoodContext);
  const {
    foods,
    setFood,
    listview,
    search: s,
    is_veg,
    is_nonveg,
  } = foodContext;
  //   console.log(foods);
  useEffect(async () => {
    const { data: products } = await getProducts();
    console.log(products);
    setFood(products);
  }, []);
  const getPageData = () => {
    let filterProduct = foods;
    // filtering product if type is true
    if (is_veg === true && is_nonveg === true) {
      console.log("veg both",is_veg,is_nonveg);
      filterProduct = filterProduct.filter((m) => m.is_veg && m.is_vegun);
    } else if (is_veg === true) {
      console.log("veg",is_veg,is_nonveg);
      filterProduct = filterProduct.filter((m) => m.is_veg);
    } else if (is_nonveg === true) {
      filterProduct = filterProduct.filter((m) => m.is_vegan);
      console.log("nonveg",is_veg,is_nonveg);
    }

    if (s)
      filterProduct = foods.filter(
        (m) => m.name.toLowerCase().search(s.toLowerCase()) >= 0
      );
    return filterProduct;
  };
  return (
    <React.Fragment>
      <div className={listview ? "row" : ""}>
        {getPageData().map((a, i) => (
          <Product pdetails={a} view={!listview} key={i} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;
