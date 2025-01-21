// src/context/TaskContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

interface TaskContextValue {
  openTaskId: string | null;
  setOpenTaskId: (taskId: string | null) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [openTaskId, setOpenTaskId] = useState<string | null>(null);

  return (
    <TaskContext.Provider value={{ openTaskId, setOpenTaskId }}>
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
