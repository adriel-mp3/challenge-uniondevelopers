import React from "react";

interface DividerProps {
  color?: string | null;
}

const Divider = ({ color }: DividerProps) => {
  return (
    <>
      <hr className={`divider ${color ? color : ''}`} />
    </>
  );
};

export default Divider;
