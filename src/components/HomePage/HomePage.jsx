import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import WorkFlow from "./WorkFlow";
import Pricing from "./Pricing";
import UiSection from "./UiSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <UiSection />
      <WorkFlow />
      <Pricing />
    </>
  );
};

export default HomePage;
