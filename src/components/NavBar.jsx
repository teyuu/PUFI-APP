import React from "react";
import puf from "../assests/navbar/puf.png";
import umbrella from "../assests/navbar/umbrella.png";
import cart from "../assests/navbar/cart.png";
import nap from "../assests/navbar/nap.png";

const NavBar = () => {
  return (
    <header className="containerNav">
      <h2>PUFI</h2>
      <nav>
        <ul className="list">
            <a href="#pufiPuff">
          <li>
              <img src={puf} alt="puf" />
              PUFI PUFF
          </li>
            </a>
            <a href="#pufiRain">
                 <li>
            <img src={umbrella} alt="umbrella" />
            PUFI RAIN
          </li>
            </a>
          <a href="#pufiCart">
             <li>
            <img src={cart} alt="cart" />
            PUFFI CART
          </li>
          </a>
         <a href="#pufiNap">
           <li className="pufinap">
            <img src={nap} alt="nap" />
            PUFFI NAP
          </li>
         </a>
         
        </ul>
      </nav>
      <div className="cuenta-compra">
        <button className="border">MI CUENTA</button>
        <button>MI COMPRA</button>
      </div>
    </header>
  );
};

export default NavBar;
