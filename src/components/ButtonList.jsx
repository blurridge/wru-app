import React from "react";
import { Button } from "./Button";

export const ButtonList = ({ links }) => {
  return links.map((link, index) => <Button key={index} link={link} />);
};
