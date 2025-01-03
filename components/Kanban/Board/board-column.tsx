// "use client"
import { useDroppable } from "@dnd-kit/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTask from "./sortable-task";
import TaskCard from "./task-card";
import { Task } from "@/types/kanban-board";

interface ColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export default function BoardColumn({ id, title, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <Card
      ref={setNodeRef}
      className="flex-1 rounded-lg min-h-[300px] bg-background text-foreground"
    >
      <CardHeader>
        <CardTitle>
          {title} | {id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SortableContext
          key={id}
          items={tasks.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((item) => (
            <SortableTask key={item.id} id={item.id}>
              <TaskCard task={item} />
            </SortableTask>
          ))}
        </SortableContext>
      </CardContent>
    </Card>
  );
}
