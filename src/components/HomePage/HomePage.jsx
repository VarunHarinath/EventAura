import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import WorkFlow from "./WorkFlow";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <>
      <HeroSection id="home" />
      <Features id="features" />
      <WorkFlow id="workflow" />
      <Pricing id="pricing" />
    </>
  );
};

export default HomePage;
