// "use client"
import { useDroppable } from "@dnd-kit/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function Column({ title, children }: ColumnProps) {
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
      <CardContent>{children}</CardContent>
    </Card>
  );
}
//   <div
//   className="bg-background text-foreground"
//     ref={setNodeRef}
//     style={{
//       flex: 1,
//       padding: "16px",
//       borderRadius: "8px",
//       minHeight: "300px",
//     }}
//   >
//     <h2>{title}</h2>
//     {children}
//   </div>
// );
// }
