"use client"
import { DndContext } from "@dnd-kit/core";
import Column from "./column";
import Card from "./card";
import { useState } from "react";
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
export default function KanbanBoard() {
  const [columns, setColumns] = useState({
    "To Do": [
      { id: "1", content: "Task 1" },
      { id: "2", content: "Task 2" },
    ],
    "In Progress": [{ id: "3", content: "Task 3" }],
    Done: [{ id: "4", content: "Task 4" }],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = Object.entries(columns).find(([_, items]) =>
      items.find((item) => item.id === active.id)
    );
    const destinationColumn = over.id;

    if (sourceColumn[0] !== destinationColumn) {
      const sourceItems = [...sourceColumn[1]];
      const destinationItems = [...columns[destinationColumn]];

      const [movedItem] = sourceItems.splice(
        sourceItems.findIndex((item) => item.id === active.id),
        1
      );
      destinationItems.push(movedItem);

      setColumns((prev) => ({
        ...prev,
        [sourceColumn[0]]: sourceItems,
        [destinationColumn]: destinationItems,
      }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
        {Object.entries(columns).map(([title, items]) => (
          <SortableContext
            key={title}
            items={items.map((item) => item.id)}
            strategy={rectSortingStrategy}
          >
            <Column title={title}>
              {items.map((item) => (
                <Card key={item.id} id={item.id} content={item.content} />
              ))}
            </Column>
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
}
