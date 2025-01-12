import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import SortableTask from "../Task/SortableTask";
import { KanbanColumn, KanbanTask } from "@/types/kanban-board";
import SortableColumn from "./SortableColumn";

interface IColumn {
  column: KanbanColumn;
  tasks: Record<string, KanbanTask>;
}
const Column = ({ column, tasks }: IColumn) => {
  return (
    <SortableColumn key={column.id} column={column}>
      <Card className="bg-red-300 p-4 max-w-md">
        <CardHeader>{column.id}</CardHeader>
        <CardContent>
          <SortableContext
            items={column.taskIds}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {column.taskIds.map((taskId: string) => {
                const task = tasks[taskId];
                return <SortableTask key={taskId} task={task} />;
              })}
            </div>
          </SortableContext>
        </CardContent>
      </Card>
    </SortableColumn>
  );
};

export default Column;
