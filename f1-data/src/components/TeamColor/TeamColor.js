import React from "react";
import { TeamColors } from "../../data/TeamColors";

const TeamColor = ({ constructorId, height = "27px" }) => {
  return (
    <div
      style={{
        width: "3px",
        height: height,
        backgroundColor: TeamColors.hasOwnProperty(constructorId)
          ? TeamColors[constructorId]
          : "#000000",
      }}
    />
  );
};

export default TeamColor;
