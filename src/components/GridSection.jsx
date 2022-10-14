import React from "react";
import umbrella from "../assests/gridsection/umbrella.jpg";
import puff from "../assests/gridsection/puff.jpg";
import pool from "../assests/gridsection/pool.jpg";
import pillow from "../assests/gridsection/pillow.jpg";
import cart from "../assests/gridsection/cart.jpg";
import beach from "../assests/gridsection/beach.jpg";

const GridSection = () => {
  return (
    <div className="gridContainer">
      <div className="textGridSection">
        <p>INSTAGRAM</p>
        <h3>#ESPUFI</h3>
      </div>
      <div>
        <div className="imgContainer">
          <img style={{ width: "300px" }} src={umbrella} alt="umbrella" />
          <img style={{ width: "300px" }} src={puff} alt="" />
          <img style={{ width: "300px" }} src={pool} alt="" />
        </div>
        <div className="imgContainer">
          <img style={{ width: "300px" }}  src={pillow} alt="" />
          <img style={{ width: "300px" }} src={cart} alt="" />
          <img style={{ width: "300px" }} src={beach} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GridSection;
