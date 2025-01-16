import React from "react";
import ModeSide from "./ModeSide";
import ModeCenter from "./ModeCenter";
import { TaskDetail } from "./TaskDetail";
type Mode = "Side" | "Center" | "Full" | "Default";
interface TaskDetailModeProps {
  mode?: Mode;
}
const TaskDetailMode = ({ mode = "Default" }: TaskDetailModeProps) => {
  switch (mode) {
    case "Side":
      return (
        <ModeSide>
          <TaskDetail />
        </ModeSide>
      );
    case "Center":
      return (
        <ModeCenter>
          <TaskDetail />
        </ModeCenter>
      );
    default:
      return (
        <ModeSide>
          <TaskDetail />
        </ModeSide>
      );
  }
};

export default TaskDetailMode;
