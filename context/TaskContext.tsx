// src/context/TaskContext.tsx
"use client";
import { ModeView } from "@/components/Kanban/Task/TaskMode";
import React, { createContext, useContext, useState } from "react";

interface TaskContextValue {
  openTaskId: string | null;
  setOpenTaskId: (taskId: string | null) => void;

  closeTask: () => void;

  viewMode: ModeView;
  setViewMode: (mode: ModeView) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [openTaskId, setOpenTaskId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ModeView>("Side");

  const closeTask = () => setOpenTaskId(null);
  return (
    <TaskContext.Provider
      value={{ openTaskId, viewMode, setOpenTaskId, closeTask, setViewMode }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within TaskProvider");
  }
  return context;
};
