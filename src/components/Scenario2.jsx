import React from "react";

export const Scenario2 = ({ data }) => {
  return (
    <div id="about" className="container">
      <div className="row">
      <div className="col-md-6">
          <img src="img/escenario2-map.png" className="img-responsive" alt="Scenario 1 - Image 1" />
        </div>
        <div className="col-md-6">
          <img src="img/escenario2-flow.jpg" className="img-responsive" alt="Scenario 1 - Image 2" />
        </div>
      </div>
      <div className="row" style={{marginTop: "100px"}}>
        <div className="col-md-12 text-center">
          <h2>{data?.title || "Loading..."}</h2>
          <p>{data?.paragraph || "Loading..."}</p>
          <p>{data?.paragraphB || "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};
