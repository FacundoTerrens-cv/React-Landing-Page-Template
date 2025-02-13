import React from "react";

export const ProductScreenLight = ({ data }) => {
  return (
    <div id="about">
        <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="img/screenlight.png" className="img-responsive" alt="Executive Image 1" />
        </div>
        <div className="col-md-6">
          <h2>{data?.title || "Loading..."}</h2>
          <p>{data?.paragraph || "Loading..."}</p>
        </div>
      </div>
      </div>
    </div>
  );
};
