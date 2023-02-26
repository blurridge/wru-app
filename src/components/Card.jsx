import React from "react";
import { Button } from "./Button";
import { Profile } from "./Profile";

export const Card = () => {
  return (
    <>
      <div class="space-y-5">
        <Profile />
        <Button />
      </div>
    </>
  );
};
