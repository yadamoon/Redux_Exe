import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const { coin } = useSelector((state) => state.counter);
  return (
    <div style={{ paddingTop: "100px" }}>
      <b>
        <big className="text-3xl text-green-900">Coins:( {coin} )</big>
      </b>
    </div>
  );
};

export default Display;
