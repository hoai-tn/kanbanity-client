import { Card, CardContent } from "@/components/ui/card";
import { useDraggable } from "@dnd-kit/core";

interface TaskProps {
  id: string;
  content: string;
}

export default function Task({ id, content }: TaskProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      className={`${isDragging ? "border-2 border-red-500 rounded-xl" : ""}`}
    >
      <Card
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className="text-foreground bg-gray-500"
      >
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
}
