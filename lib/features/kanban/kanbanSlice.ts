import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IKanbanBoard, IKanbanTask, IKanbanColumn } from '@/types/kanban-board';
import { initKanbanBoard } from '@/data/boards';
import type { RootState } from '@/lib/store';

interface KanbanState {
  board: IKanbanBoard;
  activeTaskId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: KanbanState = {
  board: initKanbanBoard,
  activeTaskId: null,
  isLoading: false,
  error: null,
};

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    setActiveTask: (state, action: PayloadAction<string | null>) => {
      state.activeTaskId = action.payload;
    },
    addTask: (state, action: PayloadAction<{ task: IKanbanTask, columnId: string }>) => {
      const { task, columnId } = action.payload;
      
      // Add the task to the tasks object
      state.board.tasks[task.id] = task;
      
      // Add the task ID to the column's taskIds array
      state.board.columns[columnId].taskIds.push(task.id);
    },
    updateTask: (state, action: PayloadAction<IKanbanTask>) => {
      const updatedTask = action.payload;
      
      // Update the task in the tasks object
      state.board.tasks[updatedTask.id] = updatedTask;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.board.tasks[taskId];
      
      if (task) {
        // Remove the task ID from the column's taskIds array
        const columnId = task.columnId;
        state.board.columns[columnId].taskIds = state.board.columns[columnId].taskIds.filter(
          (id) => id !== taskId
        );
        
        // Remove the task from the tasks object
        delete state.board.tasks[taskId];
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: string;
        sourceColumnId: string;
        destinationColumnId: string;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const { taskId, sourceColumnId, destinationColumnId, sourceIndex, destinationIndex } = action.payload;
      
      // Remove from source column
      state.board.columns[sourceColumnId].taskIds.splice(sourceIndex, 1);
      
      // Add to destination column
      state.board.columns[destinationColumnId].taskIds.splice(destinationIndex, 0, taskId);
      
      // Update the task's columnId
      state.board.tasks[taskId].columnId = destinationColumnId;
    },
    addColumn: (state, action: PayloadAction<IKanbanColumn>) => {
      const newColumn = action.payload;
      
      // Add the column to the columns object
      state.board.columns[newColumn.id] = newColumn;
      
      // Add the column ID to the columnOrder array
      state.board.columnOrder.push(newColumn.id);
    },
    updateColumn: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const { id, title } = action.payload;
      
      // Update the column title
      state.board.columns[id].title = title;
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      const columnId = action.payload;
      
      // Remove all tasks in this column
      const taskIds = [...state.board.columns[columnId].taskIds];
      taskIds.forEach(taskId => {
        delete state.board.tasks[taskId];
      });
      
      // Remove the column from the columns object
      delete state.board.columns[columnId];
      
      // Remove the column ID from the columnOrder array
      state.board.columnOrder = state.board.columnOrder.filter(id => id !== columnId);
    },
    reorderColumns: (state, action: PayloadAction<string[]>) => {
      state.board.columnOrder = action.payload;
    },
  },
});

export const {
  setActiveTask,
  addTask,
  updateTask,
  deleteTask,
  moveTask,
  addColumn,
  updateColumn,
  deleteColumn,
  reorderColumns,
} = kanbanSlice.actions;

// Selectors
export const selectKanbanBoard = (state: RootState) => state.kanban.board;
export const selectActiveTaskId = (state: RootState) => state.kanban.activeTaskId;
export const selectActiveTask = (state: RootState) => {
  const activeTaskId = state.kanban.activeTaskId;
  return activeTaskId ? state.kanban.board.tasks[activeTaskId] : null;
};

export default kanbanSlice.reducer; 