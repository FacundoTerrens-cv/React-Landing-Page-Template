import React from "react";

export const System = ({ data }) => {
  return (
    <div id="about" className="container">
      {/* Sección 1 - Imagen izquierda, Texto derecha */}
      <div className="row">
        <div className="col-md-6">
          <img src="img/about.jpg" className="img-responsive" alt="System Image 1" />
        </div>
        <div className="col-md-6">
          <h2>{data?.title || "Loading..."}</h2>
          <p>{data?.paragraph || "Loading..."}</p>
        </div>
      </div>

      {/* Sección 2 - Texto izquierda, Imagen derecha */}
      <div className="row">
        <div className="col-md-6">
          <h3>How It Works for Small Homes</h3>
          <ul>
            {data?.small
              ? data.small.map((d, i) => <li key={i}>{d}</li>)
              : "Loading..."}
          </ul>
        </div>
        <div className="col-md-6">
          <img src="img/about.jpg" className="img-responsive" alt="System Image 2" />
        </div>
      </div>

      {/* Sección 3 - Imagen izquierda, Texto derecha */}
      <div className="row">
        <div className="col-md-6">
          <img src="img/about.jpg" className="img-responsive" alt="System Image 3" />
        </div>
        <div className="col-md-6">
          <h3>How It Works for Large Homes</h3>
          <ul>
            {data?.large
              ? data.large.map((d, i) => <li key={i}>{d}</li>)
              : "Loading..."}
          </ul>
        </div>
      </div>
    </div>
  );
};
