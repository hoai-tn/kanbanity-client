export const initKanbanBoard = {
  columns: {
    column1: {
      id: "column1",
      title: "To Do",
      taskIds: ["task1", "task2", "task4"],
    },
    column2: {
      id: "column2",
      title: "In Progress",
      taskIds: ["task3"],
    },
    column3: {
      id: "column3",
      title: "Done",
      taskIds: [],
    },
    column4: {
      id: "column4",
      title: "Hold",
      taskIds: [],
    },
  },
  tasks: {
    task1: { id: "task1", title: "Design Landing Page", columnId: "column1" },
    task2: { id: "task2", title: "Setup CI/CD", columnId: "column1" },
    task3: { id: "task3", title: "Write Documentation", columnId: "column2" },
    task4: { id: "task4", title: "Write Documentation", columnId: "column1" },
  },
  columnOrder: ["column1", "column2", "column3", "column4"],
};
