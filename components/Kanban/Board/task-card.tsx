import { Card, CardContent } from "@/components/ui/card";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
  };
}
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="text-foreground bg-gray-500">
      <CardContent>{task.title} | {task.id}</CardContent>
    </Card>
  );
}
