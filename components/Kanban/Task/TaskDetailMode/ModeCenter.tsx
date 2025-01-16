import React from "react";

interface ModeCenterProps {
  children: React.ReactNode;
}

const ModeCenter = ({ children }: ModeCenterProps) => {
  return <div> this is center mode{children}</div>;
};

export default ModeCenter;
