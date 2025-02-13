import React from "react";

export const Problem = ({ data }) => {
  return (
    <div id="about" className="container">
        <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>{data?.title || "Loading..."}</h2>
          <p>{data?.paragraph || "Loading..."}</p>
        </div>
        <div className="col-md-6">
          <img src="img/section1.png" className="img-responsive" alt="Problem Image" />
        </div>
      </div>
      </div>
    </div>
  );
};
