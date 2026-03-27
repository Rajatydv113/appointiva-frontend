import React from "react";
import Header from "../cmponents/Header";
import SpecialityMenu from "../cmponents/SpecialityMenu";
import TopDoctors from "../cmponents/TopDoctors";
import Banner from "../cmponents/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
