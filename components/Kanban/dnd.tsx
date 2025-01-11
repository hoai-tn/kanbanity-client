"use client";
import { KanbanBoard, Task } from "@/types/kanban-board";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { SortableItem } from "./SortableItem";
const initialData: KanbanBoard = {
  columns: {
    column1: {
      id: "column1",
      title: "To Do",
      taskIds: ["task1", "task2", "task4"],
    },
    column2: {
      id: "column2",
      title: "In Progress",
      taskIds: ["task3"],
    },
    column3: {
      id: "column3",
      title: "Done",
      taskIds: [],
    },
  },
  tasks: {
    task1: { id: "task1", title: "Design Landing Page", columnId: "column1" },
    task2: { id: "task2", title: "Setup CI/CD", columnId: "column1" },
    task3: { id: "task3", title: "Write Documentation", columnId: "column2" },
    task4: { id: "task4", title: "Write Documentation", columnId: "column1" },
  },
  columnOrder: ["column1", "column2", "column3"],
};
function DndTest() {
  const [board, setBoard] = useState<KanbanBoard>(initialData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const findPositionOfTask = (task: Task) => {
    return board.columns[task.columnId].taskIds.indexOf(task.id);
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-3 gap-x-5">
        {board.columnOrder.map((columnId) => {
          const column = board.columns[columnId];
          return (
            <Card key={columnId} className="bg-red-300 p-4 max-w-md">
              <CardContent>
                <SortableContext
                  items={column.taskIds}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-2">
                    {column.taskIds.map((taskId) => {
                      const task = board.tasks[taskId];
                      return <SortableItem key={task.id} task={task} />;
                    })}
                  </div>
                </SortableContext>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <DragOverlay>
        {activeTask ? <SortableItem task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
  function handleDragStart(event) {
    const { active, over } = event;
    setActiveTask(active.data.current.task);
  }

  function handleDragOver(event) {
    const { active, over } = event;
    const overTask: Task = over.data.current.task;
    if (
      active.id === over.id ||
      !activeTask ||
      overTask.columnId === activeTask?.columnId
    )
      return;

    const activeTaskIndex = findPositionOfTask(activeTask);
    const overTaskIndex = findPositionOfTask(overTask);
    setBoard((prev) => {
      const activeColumn = prev.columns[activeTask.columnId];
      const overColumn = prev.columns[overTask.columnId];

      console.log({ activeColumn, overColumn });
      console.log([
        ...activeColumn.taskIds.slice(0, activeTaskIndex),
        overTask.id,
        ...activeColumn.taskIds.slice(
          activeTaskIndex + 1,
          activeColumn.taskIds.length
        ),
      ]);

      return {
        ...prev,
        columns: {
          ...prev.columns,
          // [activeColumn.id]: {
          //   ...activeColumn,
          //   taskIds: [
          //     ...activeColumn.taskIds.slice(0, activeTaskIndex),
          //     overTask.id,
          //     ...activeColumn.taskIds.slice(
          //       activeTaskIndex + 1,
          //       activeColumn.taskIds.length
          //     ),
          //   ],
          // },
          [overColumn.id]: {
            ...overColumn,
            taskIds: [
              ...overColumn.taskIds.slice(0, overTaskIndex),
              activeTask.id,
              ...overColumn.taskIds.slice(
                overTaskIndex + 1,
                overColumn.taskIds.length
              ),
            ],
          },
        },
        tasks: {
          ...board.tasks,
          [activeTask.id]: {
            ...activeTask,
            columnId: overColumn.id,
          },
        },
      };
    });
  }
  /*
    - same col
      + change active - over 
    - diff col
  */

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const overTask: Task = over.data.current.task;
    if (activeTask?.columnId === overTask.columnId) {
      const activeTaskIndex = findPositionOfTask(activeTask);
      const overTaskIndex = findPositionOfTask(overTask);
      console.log({ activeTaskIndex, overTaskIndex });

      setBoard((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [activeTask.columnId]: {
            ...prev.columns[activeTask.columnId],
            taskIds: arrayMove(
              prev.columns[activeTask.columnId].taskIds,
              activeTaskIndex,
              overTaskIndex
            ),
          },
        },
        // tasks: {
        //   ...prev.tasks,
        //   [activeTask.id]: {
        //     ...activeTask,
        //   },
        // },
      }));

      console.log(board);
    }
    setActiveTask(null);
  }
}

export default DndTest;
