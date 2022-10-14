import React from "react";
import datafiscal from "../assests/footer/datafiscal.jpg";
import escudo from "../assests/footer/escudo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="firstSectionFooter">
        <h3>PUFI</h3>
        <ul className="listaFooter">
          <a href="#pufiRain">
            <li>PUFI RAIN</li>
          </a>
          <a href="#pufiPuff">
            <li>PUFI PUFF</li>
          </a>
          <a href="#pufiCart">
            <li>PUFI CART</li>
          </a>
          <a href="#pufiNap">
            <li>PUFI NAP</li>
          </a>
        </ul>
      </div>
      <div className="secondSectionFooter">
        <ul className="listaFooter">
          <li>Contacto</li>
          <li>AYUDA</li>
          <li>CÓMO COMPRAR</li>
          <li>TÉRMINOS Y CONDICIONES</li>
        </ul>
        <div style={{ borderLeft: "1px solid grey" }} />
        <div className="secondSectionImg">
          <p>Compra 100% segura</p>
          <div className="imgFooter">
            <img className="footerImg" src={datafiscal} alt="datafiscal" />
            <img className="footerImg" src={escudo} alt="escudo" />
            <span>Comprá con la garantia de pufi</span>
          </div>
        </div>
      </div>
      <div>
        <div className="redesFooter">
          <span>Seguinos en</span>
          <FaFacebookF />
          <BsTwitter />
          <ImInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
