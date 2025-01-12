import React, { useEffect } from "react";
import "./DevanagariA.css";

const DevanagariA = () => {
  useEffect(() => {
    // Add the initial fill animation class on component mount
    const svgElement = document.querySelector(".devanagari-a");
    svgElement.classList.add("devanagari-a-initial");
  }, []);

  return (
    <svg
      className="devanagari-a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <text x="30" y="60" fontSize="50" fontFamily="Arial, sans-serif">श्रे</text>
    </svg>
  );
};

export default DevanagariA;

