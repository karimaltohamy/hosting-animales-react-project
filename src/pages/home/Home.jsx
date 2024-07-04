import React, { Fragment } from "react";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import SearchSection from "../../components/searchSection/SearchSection";
import TopRatedHotels from "../../components/topRatedHotels/TopRatedHotels";
import TopRatedPeople from "../../components/topRatedPeople/TopRatedPeople";
import Training from "../../components/ourTraining/Training";



const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <SearchSection />
      <TopRatedHotels/>
      <TopRatedPeople />
      <Training/>
    </div>
  );
};

export default Home;
