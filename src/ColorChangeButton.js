import React from "react";

function ColorChangeButton({ color }) {
  return <button className={color}>{color}</button>;
}
export default ColorChangeButton;
