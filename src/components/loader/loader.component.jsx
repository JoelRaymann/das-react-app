import React from "react";

import "./loader.styles.scss";

function LoaderComponent() {
  // Render
  return (
    <div className="loader-container">
      <div className="dots"></div>
      <div className="dots"></div>
      <div className="dots"></div>
      <div className="dots"></div>
      <div className="dots"></div>
    </div>
  );
}

export default LoaderComponent;
