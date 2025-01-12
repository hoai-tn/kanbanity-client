import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import SortableTask from "../Task/SortableTask";
import { IKanbanColumn, IKanbanTask } from "@/types/kanban-board";
import SortableColumn from "./SortableColumn";
import { EllipsisVertical, PlusIcon } from "lucide-react";

interface IColumn {
  column: IKanbanColumn;
  tasks: Record<string, IKanbanTask>;
}
const KanbanColumn = ({ column, tasks }: IColumn) => {
  return (
    <SortableColumn key={column.id} column={column}>
      <Card className="w-80 text-task-foreground">
        <CardHeader className="p-2">
          <div className="flex flex-row items-center justify-between">
            <div>
              {column.title} {column.taskIds.length}
            </div>
            <EllipsisVertical />
          </div>
        </CardHeader>
        <CardContent className="px-2 py-0 min-h-20">
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
        <CardFooter className="px-2 py-2">
          <div className="flex gap-x-2">
            <PlusIcon />
            <p>Add Task</p>
          </div>
        </CardFooter>
      </Card>
    </SortableColumn>
  );
};

export default KanbanColumn;
