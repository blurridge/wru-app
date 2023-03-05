import React from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center bg-mac-gradient bg-cover min-h-screen">
        <Card />
        <Footer />
      </div>
    </>
  );
};
