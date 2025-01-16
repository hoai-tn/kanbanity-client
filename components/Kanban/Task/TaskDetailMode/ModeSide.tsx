import React from "react";

interface ModeSideProps {
  children: React.ReactNode;
}

const ModeSide = ({ children }: ModeSideProps) => {
  
  return (
    <div className="bg-sidebar h-svh fixed top-0 right-0 w-[600px] hover:translate-x-[600px] transition-all delay-1000">
      {children}
    </div>
  );
};

export default ModeSide;
