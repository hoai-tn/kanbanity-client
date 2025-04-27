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
export interface IKanbanTask {
  id: string; // Unique identifier for the task
  title: string;
  description?: string;
  columnId: string;
  createdAt?: Date;
  updatedAt?: Date;
  assigneeId?: string;
  subtasks?: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  comments?: {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
  }[];
}

// Interface for a single column
export interface IKanbanColumn {
  id: string; // Unique identifier for the column
  title: string; // The title of the column
  taskIds: string[]; // Array of task IDs belonging to this column
}

// Interface for the Kanban board
export interface IKanbanBoard {
  columns: Record<string, IKanbanColumn>; // Object mapping column IDs to column details
  tasks: Record<string, IKanbanTask>; // Object mapping task IDs to task details
  columnOrder: string[]; // Array defining the order of columns
}
