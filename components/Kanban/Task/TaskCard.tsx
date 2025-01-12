import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
  };
}
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="text-task-foreground bg-task">
      <CardHeader className="text-card-foreground">{task.title}</CardHeader>
      <CardContent>
        {task.title} | {task.id}
      </CardContent>
    </Card>
  );
}
