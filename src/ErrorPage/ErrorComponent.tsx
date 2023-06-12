import React from "react";
import "./ErrorComponent.css";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  let navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };
  return (
    <div className="errorPage">
      <p>Sorry, We can't seem to find the product you selected</p>
      <button onClick={() => returnHome()}>Go Home</button>
    </div>
  );
};

export default ErrorComponent;
