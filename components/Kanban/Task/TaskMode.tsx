"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import TaskDetail from "./TaskDetail";
import { useTaskContext } from "@/context/TaskContext";
import { useAppSelector } from "@/lib/hooks";
import { selectKanbanBoard } from "@/lib/features/kanban/kanbanSlice";

interface TaskModeProps {
  mode: "sidebar" | "modal";
  isOpenMode: boolean;
}

export default function TaskMode({ mode, isOpenMode }: TaskModeProps) {
  const { openTaskId, closeTask } = useTaskContext();
  const board = useAppSelector(selectKanbanBoard);
  const task = openTaskId ? board.tasks[openTaskId] : null;

  if (!task) return null;

  if (mode === "sidebar") {
    return (
      <Sheet open={isOpenMode} onOpenChange={() => closeTask()}>
        <SheetContent 
          side="right" 
          className="w-[450px] sm:w-[540px] p-0"
        >
          <TaskDetail task={task} />
        </SheetContent>
      </Sheet>
    );
  }

  // Add modal implementation here if needed
  return null;
} 