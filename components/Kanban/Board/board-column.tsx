// "use client"
import { useDroppable } from "@dnd-kit/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTask from "../sortable-task";
import Task from "./task";

interface ColumnProps {
  title: string;
  tasks: any[];
}

export default function BoardColumn({ title, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <Card
      ref={setNodeRef}
      className="flex-1 rounded-lg min-h-[300px] bg-background text-foreground"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <SortableContext
          key={title}
          items={tasks.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((item) => (
            <SortableTask key={item.id} id={item.id}>
              <Task task={item} />
            </SortableTask>
          ))}
        </SortableContext>
      </CardContent>
    </Card>
  );
}
