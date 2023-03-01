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
          class="w-32 rounded-full shadow-lg"
          alt="Avatar"
        />
        <h5 class="mb-2 text-xl font-medium leading-tight text-white">
          {profile.length !== 0 && profile[0].name}
        </h5>
        <p class="text-white">{profile.length !== 0 && profile[0].fields}</p>
        <p class="text-white">where am i on the internet?</p>
      </div>
    </>
  );
};
