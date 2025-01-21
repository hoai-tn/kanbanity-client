import React from "react";
import ModeSidebar from "./ModeSidebar";
import ModeCenter from "./ModeCenter";
import { TaskDetail } from "../TaskDetail";
import SwitchModeBtn from "./SwitchModeBtn";
import { useTaskContext } from "@/context/TaskContext";
import { X } from "lucide-react";
export type Mode = "Side" | "Center" | "Full" | "Default";
interface TaskModeProps {
  mode?: Mode;
  isOpenMode: boolean;
}

const TaskModeHeader = () => {
  const { closeTask } = useTaskContext();

  return (
    <div className="flex justify-between items-center p-2">
      <div></div>
      <div className="flex gap-x-4">
        <SwitchModeBtn />
        <X onClick={closeTask} />
      </div>
    </div>
  );
};

const TaskMode = ({ mode = "Default", isOpenMode }: TaskModeProps) => {
  switch (mode) {
    case "Side":
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
    case "Center":
      return (
        <ModeCenter open={isOpenMode}>
          {/* <TaskModeHeader /> */}
          <TaskDetail />
        </ModeCenter>
      );
    default:
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
  }
};

export default TaskMode;
