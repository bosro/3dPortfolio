import React from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./sections/LogoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection/>
    </>
  );
};

export default App;
