import React from "react";
import { Button } from "./Button";

export const ButtonList = () => {
  const buttons = [];
  for (let i = 0; i < 3; i++) {
    buttons.push(<Button name={i} />);
  }
  return buttons;
};
