"use client";
import { DndContext, DragOverEvent, DragOverlay } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableTask from "../sortable-task";
import BoardColumn from "./board-column";
import { Column, Task } from "@/types/kanban-board";
import TaskCard from "./task-card";



const defaultCols = [
  {
    id: "todo" as const,
    title: "Todo",
  },
  {
    id: "in-progress" as const,
    title: "In progress",
  },
  {
    id: "done" as const,
    title: "Done",
  },
] satisfies Column[];
const initialTasks: Task[] = [
  {
    id: "task1",
    columnId: "done",
    content: "Project initiation and planning",
  },
  {
    id: "task2",
    columnId: "done",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "task3",
    columnId: "done",
    content: "Create wireframes and mockups",
  },
  {
    id: "task4",
    columnId: "in-progress",
    content: "Develop homepage layout",
  },
  {
    id: "task5",
    columnId: "in-progress",
    content: "Design color scheme and typography",
  },
  {
    id: "task6",
    columnId: "todo",
    content: "Implement user authentication",
  },
  {
    id: "task7",
    columnId: "todo",
    content: "Build contact us page",
  },
  {
    id: "task8",
    columnId: "todo",
    content: "Create product catalog",
  },
  {
    id: "task9",
    columnId: "todo",
    content: "Develop about us page",
  },
  {
    id: "task10",
    columnId: "todo",
    content: "Optimize website for mobile devices",
  },
  {
    id: "task11",
    columnId: "todo",
    content: "Integrate payment gateway",
  },
  {
    id: "task12",
    columnId: "todo",
    content: "Perform testing and bug fixing",
  },
  {
    id: "task13",
    columnId: "todo",
    content: "Launch website and deploy to server",
  },
];
export default function KanbanBoard() {
  // const [columns, setColumns] = useState({
  //   "To Do": [
  //     { id: "1", content: "Task 1" },
  //     { id: "2", content: "Task 2" },
  //   ],
  //   "In Progress": [{ id: "3", content: "Task 3" }],
  //   Done: [{ id: "4", content: "Task 4" }],
  // });

  const [columns, setColumns] = useState<Column[]>(defaultCols);
  // const pickedUpTaskColumn = useRef<ColumnId | null>(null);

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragEnd = (event: DragOverEvent) => {
    // const { active, over } = event;
    // if (!over) return;
    // const sourceColumn = Object.entries(columns).find(([_, items]) =>
    //   items.find((item) => item.id === active.id)
    // );
    // const destinationColumn = over.id;
    // if (sourceColumn[0] !== destinationColumn) {
    //   const sourceItems = [...sourceColumn[1]];
    //   const destinationItems = [...columns[destinationColumn]];
    //   const [movedItem] = sourceItems.splice(
    //     sourceItems.findIndex((item) => item.id === active.id),
    //     1
    //   );
    //   destinationItems.push(movedItem);
    //   setColumns((prev) => ({
    //     ...prev,
    //     [sourceColumn[0]]: sourceItems,
    //     [destinationColumn]: destinationItems,
    //   }));
    // }
  };

  const handleDragStart = (event: DragOverEvent) => {
    // const { active } = event;
    // const sourceColumn = Object.entries(columns).find(([_, items]) =>
    //   items.find((item) => item.id === active.id)
    // );
    // const task = [...sourceColumn[1]].find((item) => item.id === active.id);
    // if (task) setActiveTask(task);
  };

  const getBoardSelection = (id) => {};
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
  };
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
        {columns.map((col) => (
          // <SortableContext
          //   key={title}
          //   items={items.map((item) => item.id)}
          //   strategy={rectSortingStrategy}
          // >
          <BoardColumn
            key={col.id}
            title={col.title}
            tasks={tasks.filter((e) => e.columnId === col.id)}
          />
          // </SortableContext>
        ))}

        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
