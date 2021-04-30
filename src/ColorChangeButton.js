import React from "react";

function ColorChangeButton({ color, setColor }) {
  return (
    <button className={color} onClick={() => setColor(`${color}`)}>
      {color}
    </button>
  );
}
export default ColorChangeButton;
