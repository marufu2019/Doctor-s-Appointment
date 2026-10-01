import React from "react";
import Header from "../Components/Header";
import SpecialityMenu from "../Components/SpecialityMenu";
import TopDoctors from "../Components/TopDoctors";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 dark:text-white transition-colors">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
