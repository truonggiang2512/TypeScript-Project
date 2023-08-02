import React from "react";
import Carousel from "./Carousel/Carousel";
import Categories from "./Categories/Categories";
import HomeServices from "./HomeServices/HomeServices";
import Proposition from "./Proposition/Proposition";
import Solutions from "./Solutions/Solutions";
export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeServices />
      <Proposition />
      <Categories />
      <Solutions />
    </div>
  );
}
