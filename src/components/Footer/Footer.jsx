import React from "react";
import "./Footer.css";
import icon1 from "../../img/соцсети (5).svg";
import icon2 from "../../img/соцсети (6).svg";
import icon3 from "../../img/соцсети (7).svg";
import icon4 from "../../img/соцсети (8).svg";
import logo from "../../img/logo_two.svg";

const Footer = ({ time }) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="foot">
            <div className="icons">
              <a
                target="blank"
                href="https://api.whatsapp.com/send?phone=996707353164"
              >
                <img className="icon" src={icon1} alt="" />
              </a>
              <a target="blank" href="https://t.me/+EtGwLThL-ORjZWNi">
                <img className="icon" src={icon2} alt="" />
              </a>
              <a target="blank" href="https://www.instagram.com/ensar.kargo/">
                <img className="icon" src={icon3} alt="" />
              </a>
              <a target="blank" href="https://www.tiktok.com/@ensar.kargo">
                <img className="icon" src={icon4} alt="" />
              </a>
            </div>
            <img src={logo} alt="" className="logo" />
            <div>
              <p className="address">г.Бишкек пр. Чуй 120</p>
              <p className="text">3 этаж, 228 кабинет</p>
              <p className="text">График {time.work_time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
