import React from "react";
import { ButtonList } from "./ButtonList";
import { Profile } from "./Profile";

export const Card = ({ profile, links }) => {
  return (
    <>
      <div class="mt-auto space-y-5">
        <Profile profile={profile} />
        <ButtonList links={links} />
      </div>
    </>
  );
};
