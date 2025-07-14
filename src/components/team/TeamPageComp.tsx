'use client'
import dynamic from "next/dynamic";

const TeamPageComp = dynamic(() => import("@/components/TeamPageComp"), {
  ssr: false,
});

const TeamPageComponent = () => {
  return (
    <div>
      <TeamPageComp />
    </div>
  );
};

export default TeamPageComponent;
