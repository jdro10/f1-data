import React from "react";
import { TeamColors } from "../../data/TeamColors";

const TeamColor = ({ constructorId }) => {
  return (
    <div
      style={{
        width: "3px",
        height: "27px",
        backgroundColor: TeamColors.hasOwnProperty(constructorId)
          ? TeamColors[constructorId]
          : "#000000",
      }}
    />
  );
};

export default TeamColor;
