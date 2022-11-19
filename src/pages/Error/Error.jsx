import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>oops! its a dead end</h1>
        <Link to='/'>back home</Link>
      </div>
    </div>
  );
};

export default Error;