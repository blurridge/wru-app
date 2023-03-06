import React from "react";
import profilePic from "../assets/zach.jpg";

export const Profile = ({ profile }) => {
  return (
    <>
      <div class="flex flex-col items-center space-y-5">
        <img
          src={profilePic}
          class="rounded-full object-cover shadow-lg w-32 h-32 sm:w-40 sm:h-40"
          alt="Avatar"
        />
        <h5 class="mb-2 font-title font-medium leading-tight text-white text-2xl sm:text-4xl">
          {profile.length !== 0 && profile[0].name}
        </h5>
        <p class="text-white text-xs sm:text-base">
          {profile.length !== 0 && profile[0].fields}
        </p>
      </div>
    </>
  );
};
