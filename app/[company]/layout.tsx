import CompanyNav from "@/components/ui/Nav/CompanyNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CompanyNav />
      Company layout
      {children}
    </div>
  );
};

export default layout;
