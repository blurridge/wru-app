import React from "react";
import { ButtonList } from "./ButtonList";
import { Profile } from "./Profile";

export const Card = () => {
  return (
    <>
      <div class="mt-auto space-y-5">
        <Profile />
        <ButtonList />
      </div>
    </>
  );
};
