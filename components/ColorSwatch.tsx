import React from "react";

type ColorSwatchProps = {
  name: string;
  colorVariable: string;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, colorVariable }) => {
  return (
    <div
      style={{ backgroundColor: `var(--${colorVariable})` }}
      className={`flex flex-col items-center justify-center w-20 h-20  text-white text-sm rounded-md`}
    >
      {name}
    </div>
  );
};

export default ColorSwatch;
