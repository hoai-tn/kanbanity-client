import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { Task } from "@/types/kanban-board";

type SortableTaskProps = {
  children: React.ReactNode;
  task: Task;
  isOverlay?: boolean;
};

const SortableTask = ({ children, task, isOverlay }: SortableTaskProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { task, type: "Task" } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
      })}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

export default SortableTask;
