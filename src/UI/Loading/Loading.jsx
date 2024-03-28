import React from "react";
import "./Loading.css"

const Loading = ({ white }) => {
  return <span className={`loader ${white && "white"}`}></span>;
};

export default Loading;
