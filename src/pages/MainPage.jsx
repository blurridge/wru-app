import React from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen bg-mac-gradient min-h-screen space-y-40">
        <Card />
        <Footer />
      </div>
    </>
  );
};
