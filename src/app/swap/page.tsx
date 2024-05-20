import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";

const page = () => {
  return (
    <>
      <WavyBackground
        className="max-w-4xl mx-auto pb-40"
        colors={["#FCFC03", "#98DD28"]}
      >
        <h1>hello</h1>
      </WavyBackground>
    </>
  );
};

export default page;
