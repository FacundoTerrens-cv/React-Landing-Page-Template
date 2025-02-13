import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Scenario1 } from "./components/Scenario1";
import { Scenario2 } from "./components/Scenario2";
import { Scenario3 } from "./components/Scenario3";
import { Executive } from "./components/Executive";
import { Problem } from "./components/Problem";
import { ProductScreenLight } from "./components/ProductScreenLight";
import { ProductScreenDark } from "./components/ProductScreenDark";
import { ProductWatch } from "./components/ProductWatch";
import { RadioSection } from "./components/RadioSection";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <ProductScreenLight data={landingPageData.ProductScreenLight} />
      <ProductScreenDark data={landingPageData.ProductScreenDark} />
      <ProductWatch data={landingPageData.ProductWatch} />
      <RadioSection data={landingPageData.RadioSection} />
      <Scenario1 data={landingPageData.Scenario1} />
      <Scenario2 data={landingPageData.Scenario2} />
      <Scenario3 data={landingPageData.Scenario3} />
      <Executive data={landingPageData.Executive} />
      <Problem data={landingPageData.Problem} />
    </div>
  );
};

export default App;
