import React from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <NavLink to="login">login</NavLink>
      <NavLink to="register">register</NavLink>
    </div>
  );
};

export default Main;
