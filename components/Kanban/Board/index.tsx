"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import BoardColumn from "./board-column";
import TaskCard from "./task-card";
import { Board, Task } from "@/types/kanban-board";
import _ from "lodash";
import SortableTask from "./sortable-task";
import { hasDraggableData } from "@/lib/utils";

const initialData: Board = {
  columns: [
    {
      id: "column-001",
      title: "To Do",
      tasks: [
        { id: "task-001", title: "Set up Tailwind" },
        { id: "task-002", title: "Learn React DND Kit" },
      ],
    },
    {
      id: "column-002",
      title: "In Progress",
      tasks: [
        { id: "task-003", title: "Learn Nuxt" },
        { id: "task-004", title: "Learn Vue" },
      ],
    },
    {
      id: "column-003",
      title: "Done",
      tasks: [],
    },
  ],
};

const KanbanBoard = () => {
  const [board, setBoard] = useState<Board>(initialData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;
    const data = event.active.data.current;
    if (data.type === "Task") setActiveTask(data.task);
    // const task = _.reduce(
    //   board.columns,
    //   (acc, col) => acc.concat(col.tasks),
    //   [] as Task[]
    // ).find((task) => task.id === id);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;
    console.log(activeId, overId);

    // const activeColumn = board.columns.find((col) =>
    //   col.tasks.some((task) => task.id === active.id)
    // );
    // const overColumn = board.columns.find((col) => col.id === over.id);
    // console.log(activeColumn?.title, overColumn?.title);
    // // Check if the task is dragged from one column to another
    // if (activeColumn && overColumn && activeColumn !== overColumn) {
    //   setBoard((prev) => {
    //     const activeTask = activeColumn.tasks.find(
    //       (task) => task.id === active.id
    //     );
    //     if (!activeTask) return prev;

    //     return {
    //       columns: prev.columns.map((col) => {
    //         if (col === activeColumn) {
    //           return {
    //             ...col,
    //             tasks: col.tasks.filter((task) => task.id !== active.id),
    //           };
    //         } else if (col === overColumn) {
    //           return {
    //             ...col,
    //             tasks: [...col.tasks, activeTask],
    //           };
    //         }
    //         return col;
    //       }),
    //     };
    //   });
    // }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const column = board.columns.find((col) =>
      col.tasks.some((task) => task.id === active.id)
    );

    if (column) {
      const activeIndex = column.tasks.findIndex(
        (task) => task.id === active.id
      );
      const overIndex = column.tasks.findIndex((task) => task.id === over.id);

      if (activeIndex !== overIndex) {
        setBoard((prev) => ({
          columns: prev.columns.map((col) => {
            if (col === column) {
              return {
                ...col,
                tasks: arrayMove(col.tasks, activeIndex, overIndex),
              };
            }
            return col;
          }),
        }));
      }
    }
    setActiveTask(null);
  };

  return (
    <DndContext
      sensors={sensors}
      // collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex space-x-4 p-4">
        {board.columns.map((column) => (
          <SortableContext
            key={column.id}
            items={column.tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            <BoardColumn
              id={column.id}
              title={column.title}
              tasks={column.tasks}
            />
          </SortableContext>
        ))}
      </div>
      <DragOverlay>
        {activeTask ? (
          <SortableTask task={activeTask} isOverlay>
            <TaskCard task={activeTask} />
          </SortableTask>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
