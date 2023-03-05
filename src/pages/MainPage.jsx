import React from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { getLinks } from "../utils/getLinks";
import { getProfile } from "../utils/getProfile";

export const MainPage = () => {
  const [profile, setProfile] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const profileData = await getProfile();
      setProfile([...profileData]);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const linkData = await getLinks();
      setLinks([...linkData]);
    };
    getData();
  }, []);

  return (
    <>
      <div class="flex flex-col items-center justify-center bg-mac-gradient bg-cover min-h-screen">
        <Card profile={profile} links={links} />
        <Footer links={links} />
      </div>
    </>
  );
};
