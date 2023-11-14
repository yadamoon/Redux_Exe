import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const { coin } = useSelector((state) => state.counter);
  return (
    <div style={{ paddingTop: "200px" }}>
      <b>
        <big className="value">Coins: {coin}</big>
      </b>
    </div>
  );
};

export default Display;
