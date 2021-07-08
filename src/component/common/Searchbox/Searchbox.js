import React, { useContext } from "react";
import Togglebtn from "../ToggleCheckbox/ToggleCheckbox";
import { FoodContext } from "../../../context/FoodProvider";
import "./search.css";
const Searchbox = () => {
  const foodContext = useContext(FoodContext);
  const { listview, setlistview, search, setsearch } = foodContext;
  return (
    <div>
      <form className="flex-form">
        <label htmlFor="searchQuery" className="label">
          <i className="fa fa-search" aria-hidden="true" />
        </label>
        <input
          type="text"
          name="searchQuery"
          className="input"
          value={search}
          onChange={(e) => setsearch(e.currentTarget.value)}
          placeholder="Eg:Tandoori Chicken"
        />
        <div className="togglebtn">
          <Togglebtn
            lname="List View"
            rname="Grid View"
            onclick={() => setlistview(!listview)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
