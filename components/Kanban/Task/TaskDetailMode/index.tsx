import React from "react";
import ModeSidebar from "./ModeSidebar";
import ModeCenter from "./ModeCenter";
import { TaskDetail } from "./TaskDetail";
type Mode = "Side" | "Center" | "Full" | "Default";
interface TaskDetailModeProps {
  mode?: Mode;
  isOpenMode: boolean
}
const TaskDetailMode = ({ mode = "Default", isOpenMode }: TaskDetailModeProps) => {
  switch (mode) {
    case "Side":
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskDetail />
        </ModeSidebar>
      );
    case "Center":
      return (
        <ModeCenter>
          <TaskDetail />
        </ModeCenter>
      );
    default:
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskDetail />
        </ModeSidebar>
      );
  }
};

export default TaskDetailMode;
