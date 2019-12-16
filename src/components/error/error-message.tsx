import React from "react";
import "./error-message.css";
import icon from "./404.gif";


const ErrorMessage = () => {
  return (
    <div className="error-indicator">
      <img className="error-indicator__image" src={ icon } alt="error icon"/>

      <span className="woops">Wooops</span>
      <span>something has gone terribly wrong</span>
    </div>
  );
};


export default ErrorMessage;
