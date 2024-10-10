import React from "react";

type ColorSwatchProps = {
  name: string;
  colorVariable: string;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, colorVariable }) => {
  return (
    <div
      style={{ backgroundColor: `var(--${colorVariable})` }}
      className={`flex h-20 w-20 flex-col items-center justify-center rounded-md text-sm text-white`}
    >
      {name}
    </div>
  );
};

export { ColorSwatch };
