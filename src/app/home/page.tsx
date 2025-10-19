import HomeComponent from "@/components/HomePageComp";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <Suspense>
        <HomeComponent />
      </Suspense>
    </div>
  );
};

export default Home;
