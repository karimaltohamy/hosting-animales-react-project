import React, { Fragment } from "react";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import SearchSection from "../../components/searchSection/SearchSection";

const Home = () => {
  return (
    <div className="px-[10px]">
      <HeroSlider />
      <SearchSection />
    </div>
  );
};

export default Home;
