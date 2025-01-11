// export interface Task {
//   id: number;
//   title: string;
//   description?: string;
// }

// export interface Column {
//   id: number;
//   title: string;
//   tasks: Task[];
// }

// export interface Board {
//   columns: Column[];
// }
// Interface for a single task
export interface Task {
  id: string; // Unique identifier for the task
  title: string;
  description?: string;
  columnId: string,
}

// Interface for a single column
export interface Column {
  id: string; // Unique identifier for the column
  title: string; // The title of the column
  taskIds: string[]; // Array of task IDs belonging to this column
}

// Interface for the Kanban board
export interface KanbanBoard {
  columns: Record<string, Column>; // Object mapping column IDs to column details
  tasks: Record<string, Task>; // Object mapping task IDs to task details
  columnOrder: string[]; // Array defining the order of columns
}
