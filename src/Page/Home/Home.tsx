import React from "react";
import Carousel from "./Carousel/Carousel";
import HomeServices from "./HomeServices/HomeServices";
import Proposition from "./Proposition/Proposition";
export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeServices />
      <Proposition />
    </div>
  );
}
