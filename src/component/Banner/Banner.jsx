import React, { useContext } from "react";
import img from "../../assets/image/img1.png";
import { FoodContext } from "../../context/FoodProvider";
import Icon from "../common/Icon/Icon";
import "./banner.css";
import Togglebtn from '../common/ToggleCheckbox/ToggleCheckbox';

const Banner = (props) => {
  const foodContext = useContext(FoodContext);
  const { is_veg, is_nonveg, setnonveg, setveg } = foodContext;
  const food1 = () => {
    setveg(!is_veg);
    console.log(is_veg);
  };
  const food2 = () => {
    setnonveg(!is_nonveg);
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="h-c-img">
          <img src={img} alt="header" />
        </div>
        <div className="h-content-sec2">
          <div className="font-25">Demo</div>
          <div className="h-c-s-desc">
            <div className="h-c-s-desc-btn">
              <div className="t-btn">
                <Togglebtn onclick={() => food1()} />
                <div className="font-12">vegetarian</div>
              </div>
              <div className="t-btn">
                <Togglebtn onclick={() => food2()} />
                <div className="font-12">vegun</div>
              </div>
            </div>
            <div className="h-c-s-desc-icon font-25">
              <Icon cname="fa fa-star" />
              <Icon cname="fa fa-star" />
              <Icon cname="fa fa-star" />
              <Icon cname="fa fa-star" />
              <Icon cname="fa fa-star-o" />
              <div className="font-12">100k+ Rating </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
