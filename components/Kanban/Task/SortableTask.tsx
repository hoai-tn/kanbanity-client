import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { KanbanTask } from "@/types/kanban-board";
import TaskCard from "./TaskCard";

type SortableTaskProps = {
  task: KanbanTask;
  isOverlay?: boolean;
};

const SortableTask = ({ task, isOverlay }: SortableTaskProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { task, type: "task" } });

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
      <TaskCard task={task} />
    </div>
  );
};

export default SortableTask;
