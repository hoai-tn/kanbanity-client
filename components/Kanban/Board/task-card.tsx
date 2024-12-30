import { Card, CardContent } from "@/components/ui/card";

interface TaskProps {
  task: {
    id: string;
    content: string;
  };
}
export default function TaskCard({ task }: TaskProps) {
  return (
    <Card className="text-foreground bg-gray-500">
      <CardContent>{task.content}</CardContent>
    </Card>
  );
}
