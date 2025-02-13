import React from "react";

export const Executive = ({ data }) => {
  return (
    <div id="about">
        <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="img/section2.png" className="img-responsive" alt="Executive Image 1" />
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
