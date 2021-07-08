import React, { useEffect, useContext } from "react";
import { getProducts } from "../../services/foodService";
import { FoodContext } from "../../context/FoodProvider";
import ProductList from "./ProductList";
import ProductGrid from "./ProductGrid";
import non_veg_logo from "../../assets/image/nonveg.png";
import veg_logo from "../../assets/image/veg.png";
import { tokenKey } from "../../Constants/tokenKey";

const Products = () => {
  const foodContext = useContext(FoodContext);
  const {
    foods,
    setFood,
    listview,
    search: s,
    is_veg,
    is_nonveg,
    cart,
    additemtocart,
    deleteitemtocart,
    increaseitemtocart,
    decreaseitemtocart,
  } = foodContext;

  useEffect(async () => {
    const { data: products } = await getProducts();
    console.log(products);
    setFood(products);
  }, []);

  const checkitemtocart = (a) => {
    return cart.find((c) => a.id === c.id);
  };

  useEffect(() => {
    localStorage.setItem(tokenKey.cart, JSON.stringify(cart));
  }, [cart]);

  const handlecart = (i, a) => {
    if (!checkitemtocart(a)) {
      additemtocart({ ...a, quantity: 1 });
      return;
    }
    if (checkitemtocart(a).quantity === 1 && i < 0) {
      deleteitemtocart(a.id);
      return;
    }
    if (i > 0) {
      increaseitemtocart(a.id);
      console.log(i, cart);
      return;
    }
    if (i < 0) {
      decreaseitemtocart(a.id);
      return;
    }
  };

  const getPageData = () => {
    let filterProduct = foods;
    if (is_veg === true && is_nonveg === true) {
      console.log("veg both", is_veg, is_nonveg);
      filterProduct = filterProduct.filter((m) => m.is_veg && m.is_vegun);
    } else if (is_veg === true) {
      console.log("veg", is_veg, is_nonveg);
      filterProduct = filterProduct.filter((m) => m.is_veg);
    } else if (is_nonveg === true) {
      filterProduct = filterProduct.filter((m) => m.is_vegan);
      console.log("nonveg", is_veg, is_nonveg);
    }

    if (s)
      filterProduct = foods.filter(
        (m) => m.name.toLowerCase().search(s.toLowerCase()) >= 0
      );
    return filterProduct;
  };

  return (
    <React.Fragment>
      {!listview ? (
        <div className="">
          {getPageData().map((a, i) => (
            <ProductList
              pdetails={a}
              logo={a.is_veg ? veg_logo : non_veg_logo}
              view={!listview}
              num={checkitemtocart(a)}
              handleCart={(n) => handlecart(n, a)}
              key={i}
            />
          ))}
        </div>
      ) : (
        <div className="row">
          {getPageData().map((a, i) => (
            <ProductGrid
              pdetails={a}
              logo={a.is_veg ? veg_logo : non_veg_logo}
              view={!listview}
              num={checkitemtocart(a)}
              handleCart={(n) => handlecart(n, a)}
              key={i}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Products;
