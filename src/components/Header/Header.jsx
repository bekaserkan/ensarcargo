import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../img/logo.svg";
import phone from "../../img/phone.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

const Header = ({ time }) => {
  const [local, setLocal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLocal(token);
    } else {
      setLocal("");
    }
  }, [location]);

  function Logout() {
    navigate("/login");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }

  return (
    <div className="header">
      <div className="container">
        <div className="head">
          <NavLink to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <div className="block">
            <div className="text_div">
              {" "}
              <img className="icon" src={phone} alt="" />{" "}
              <p className="text">+996 707 353 164</p>
            </div>
            <div className="text_div">
              {" "}
              <IoMdTime color="var(--main)" size={24} />
              <p className="text">{time.work_time}</p>
            </div>
          </div>
          <div className="flex">
            <div className="none">
              <div className="text_div">
                {" "}
                <img className="icon" src={phone} alt="" />{" "}
                <p className="text">+996 707 353 164</p>
              </div>
              <div className="text_div">
                {" "}
                <IoMdTime color="var(--main)" size={24} />
                <p className="text">{time.work_time}</p>
              </div>
            </div>
            {local ? (
              <>
                <div onClick={() => Logout()} className="button_form gray">
                  Выйти
                </div>
                <NavLink to="/dashboard">
                  <div className="button_form">Личный кабинет</div>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <div className="button_form gray">Войти</div>
                </NavLink>
                <NavLink to="/register">
                  <div className="button_form black">Зарегистрироваться</div>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
