import React from "react";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-dvh m-auto flex flex-col justify-center items-center">
        <Hero />
      </div>
    </>
  );
};
