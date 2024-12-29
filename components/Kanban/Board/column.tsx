import { useDroppable } from "@dnd-kit/core";

export default function Column({ title, children }) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1,
        padding: "16px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        minHeight: "300px",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
