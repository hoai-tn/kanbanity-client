import React from 'react';
import ModeSidebar from './ModeSidebar';
import ModeCenter from './ModeCenter';
import SwitchModeBtn from './SwitchModeBtn';
import { useTaskContext } from '@/context/TaskContext';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TaskDetail from '../TaskDetail';
import { useAppSelector } from '@/lib/hooks';
import { selectKanbanBoard } from '@/lib/features/kanban/kanbanSlice';

export type ModeView = 'Side' | 'Center' | 'Full';
interface TaskModeProps {
  mode?: ModeView;
  isOpenMode: boolean;
}

const TaskModeHeader = () => {
  const { closeTask } = useTaskContext();

  return (
    <div className='flex h-12 items-center justify-between border-b pl-4 pr-2 text-task-foreground'>
      <div>
        <div>
          <span>...</span> / <span>List</span>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <SwitchModeBtn />
        <Button onClick={closeTask} variant='ghost' size='icon'>
          <X />
        </Button>
      </div>
    </div>
  );
};

const TaskMode = ({ mode, isOpenMode }: TaskModeProps) => {
  const { viewMode, openTaskId } = useTaskContext();
  const board = useAppSelector(selectKanbanBoard);
  const currentTask = openTaskId ? board.tasks[openTaskId] : undefined;

  switch (mode) {
    case 'Side':
      return (
        <ModeSidebar open={isOpenMode && viewMode === 'Side'}>
          <TaskModeHeader />
          <TaskDetail task={currentTask} />
        </ModeSidebar>
      );
    case 'Center':
      return (
        <ModeCenter
          open={isOpenMode && viewMode === 'Center'}
          header={<TaskModeHeader />}
        >
          <TaskDetail task={currentTask} />
        </ModeCenter>
      );
    default:
      return (
        <ModeSidebar open={isOpenMode && viewMode === 'Side'}>
          <TaskModeHeader />
          <TaskDetail task={currentTask} />
        </ModeSidebar>
      );
  }
};

export default TaskMode;
