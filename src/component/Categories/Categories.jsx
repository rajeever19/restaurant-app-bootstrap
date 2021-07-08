import React, { useEffect, useState, useContext } from "react";
import {
  getCategories,
  getFoodbyCategory,
  getProducts,
} from "../../services/foodService";
import { FoodContext } from "../../context/FoodProvider";

const Categories = () => {
  const foodContext = useContext(FoodContext);
  const { setFood } = foodContext;
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(async () => {
    const { data } = await getCategories();
    const cate = [{ name: "All food", id: 0 }, ...data.category];
    setItem(cate);
  }, []);

  const changeCategory = async (a, i) => {
    setSelectedCategory(i);
    if (i === -1 || i === 0) {
      setLoading(true);
      const { data: product1 } = await getProducts();
      setFood(product1);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data: products } = await getFoodbyCategory(a.id);
    setLoading(false);
    setFood(products);
    // console.log("cate", products, a, i);
  };
  return (
    <>
      {items.map((a, i) => (
        <div
          key={a._id + "side" + i}
          className={
            selectedCategory === i
              ? "cate_element text-light bg-secondary"
              : "cate_element text-secondary "
          }
          onClick={() => changeCategory(a, i)}
        >
          <div>
            {a.name}
            {loading && selectedCategory === i ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
