import React from "react";
import profilePic from "../assets/zach.jpg";
import { getProfile } from "../utils/getProfile";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const profileData = await getProfile();
      setProfile([...profileData]);
    };
    getData();
  }, []);

  return (
    <>
      <div class="flex flex-col items-center space-y-5">
        <img
          src={profilePic}
          class="rounded-full shadow-lg w-28 sm:w-32"
          alt="Avatar"
        />
        <h5 class="mb-2 font-title font-medium leading-tight text-white text-2xl sm:text-4xl">
          {profile.length !== 0 && profile[0].name}
        </h5>
        <p class="text-white text-xs sm:text-base">{profile.length !== 0 && profile[0].fields}</p>
      </div>
    </>
  );
};
