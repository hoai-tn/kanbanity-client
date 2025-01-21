import { useTaskContext } from "@/context/TaskContext";
import { FullscreenIcon, MinimizeIcon, SidebarCloseIcon } from "lucide-react";
import React from "react";

const SwitchModeBtn = () => {
  const { setViewMode } = useTaskContext();
  return (
    <div className="flex gap-x-4">
      <MinimizeIcon onClick={() => setViewMode("Center")} className="cursor-pointer"/>
      <SidebarCloseIcon onClick={() => setViewMode("Side")} className="cursor-pointer"/>
      <FullscreenIcon className="cursor-pointer"/>
    </div>
  );
};

export default SwitchModeBtn;
