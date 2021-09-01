import React from "react";
import { TeamColors } from "../../data/TeamColors";

const TeamColor = ({ constructorId }) => {
  return (
    <div
      style={{
        width: "7px",
        height: "25px",
        backgroundColor: TeamColors.hasOwnProperty(constructorId)
          ? TeamColors[constructorId]
          : "#000000",
      }}
    />
  );
};

export default TeamColor;
