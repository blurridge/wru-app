import React from "react";
import { Button } from "./Button";

export const ButtonList = ({ links }) => {
  const sortedLinks = [...links].sort((a, b) => a.name.localeCompare(b.name));
  return sortedLinks.map((link, index) => <Button key={index} link={link} />);
};
