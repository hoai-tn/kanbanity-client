import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { Task } from "@/types/kanban-board";
interface SortableItemProps {
  task: Task;
  isOverlay?: boolean;
}
export function SortableItem({ task, isOverlay }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      task,
      type: "task",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: "80px",
    background: "gray",
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
      {task.title} | {task.id} { isDragging.toString()}
    </div>
  );
}
