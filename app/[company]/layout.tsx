import WorkspaceNav from "@/components/ui/Nav/WorkspaceNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <WorkspaceNav />
      Company layout
      {children}
    </div>
  );
};

export default layout;
