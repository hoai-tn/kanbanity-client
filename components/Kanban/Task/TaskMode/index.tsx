import React from 'react';
import ModeSidebar from './ModeSidebar';
import ModeCenter from './ModeCenter';
import { TaskDetail } from '../TaskDetail';
import SwitchModeBtn from './SwitchModeBtn';
import { useTaskContext } from '@/context/TaskContext';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
export type ModeView = 'Side' | 'Center' | 'Full' | 'Default';
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

const TaskMode = ({ mode = 'Default', isOpenMode }: TaskModeProps) => {
  switch (mode) {
    case 'Side':
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
    case 'Center':
      return (
        <ModeCenter open={isOpenMode}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeCenter>
      );
    default:
      return (
        <ModeSidebar open={isOpenMode}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
  }
};

export default TaskMode;
