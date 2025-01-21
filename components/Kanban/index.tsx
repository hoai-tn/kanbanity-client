"use client";
import "./index.css";
import {
  IKanbanBoard as IKanbanBoard,
  IKanbanTask,
} from "@/types/kanban-board";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
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
import _ from "lodash";
import TaskCard from "./Task/TaskCard";
import { KanbanColumn } from "./Column";
import { initKanbanBoard } from "@/data/boards";
import { useSidebar } from "../ui/sidebar";
import TaskMode from "./Task/TaskMode";
import { useAppSelector } from "@/lib/hooks";
import { useTaskContext } from "@/context/TaskContext";
function KanbanBoard() {
  const counter = useAppSelector((state) => state.counter.value);
  const { toggleSidebar } = useSidebar();
  const [board, setBoard] = useState<IKanbanBoard>(initKanbanBoard);
  const [activeTask, setActiveTask] = useState<IKanbanTask | null>(null);
  const { openTaskId, viewMode } = useTaskContext();
  const [isOpenTaskDetail, setIsOpenTaskDetail] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const findPositionOfTask = (task: IKanbanTask) => {
    if (!task) return 0;
    return board.columns[task.columnId].taskIds.indexOf(task.id);
  };
  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="kanban-board">
          {board.columnOrder.map((columnId) => {
            const column = board.columns[columnId];
            return (
              <KanbanColumn
                key={columnId}
                column={column}
                tasks={board.tasks}
              />
            );
          })}
        </div>
        <TaskMode mode={viewMode} isOpenMode={openTaskId !== null} />
        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
      <button onClick={() => setIsOpenTaskDetail((prev) => !prev)}>
        Toggle {counter}
      </button>
    </div>
  );
  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveTask(active.data.current.task);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (active.id === over?.id || !activeTask) return;

    const isOverColumnType = over.data.current.type === "column";
    const overTask: IKanbanTask = over.data.current.task;

    const activeColumn = board.columns[activeTask.columnId];
    const overColumn =
      board.columns[isOverColumnType ? over.id : overTask.columnId];

    if (overColumn.id === activeTask?.columnId) return;

    const activeTaskIndex = findPositionOfTask(activeTask);
    const overTaskIndex = findPositionOfTask(overTask);

    setBoard((prev) => {
      return {
        ...prev,
        columns: {
          ...prev.columns,
          [activeColumn.id]: {
            ...activeColumn,
            taskIds: [
              ...activeColumn.taskIds.slice(0, activeTaskIndex),
              ...activeColumn.taskIds.slice(
                activeTaskIndex + 1,
                activeColumn.taskIds.length
              ),
            ],
          },

          [overColumn.id]: {
            ...overColumn,
            taskIds: [
              ...overColumn.taskIds.slice(0, overTaskIndex),
              activeTask.id,
              ...overColumn.taskIds.slice(
                overTaskIndex,
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
    setActiveTask((prev) =>
      prev ? { ...prev, columnId: overColumn.id } : prev
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const overTask: IKanbanTask = over.data.current.task;
    if (activeTask?.columnId === overTask.columnId) {
      const activeTaskIndex = findPositionOfTask(activeTask);
      const overTaskIndex = findPositionOfTask(overTask);
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
      }));
    }
    setActiveTask(null);
  }
}

export default KanbanBoard;
