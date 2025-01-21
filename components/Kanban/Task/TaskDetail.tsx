import { useTaskContext } from "@/context/TaskContext";
import React, { useState } from "react";

export function TaskDetail({ ...props }) {
  const { openTaskId } = useTaskContext();
  return (
    <div {...props}>
      <p>Task ID: {openTaskId}</p>
    </div>
  );
}
