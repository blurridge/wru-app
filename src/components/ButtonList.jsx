import React from "react";
import { useState, useEffect } from "react";
import { getLinks } from "../utils/getLinks";
import { Button } from "./Button";

export const ButtonList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const linkData = await getLinks();
      setLinks([...linkData]);
    };
    getData();
  }, []);

  return links.map((link, index) => <Button key={index} props={link} />);
};
