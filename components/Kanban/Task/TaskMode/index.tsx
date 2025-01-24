import React from 'react';
import ModeSidebar from './ModeSidebar';
import ModeCenter from './ModeCenter';
import { TaskDetail } from '../TaskDetail';
import SwitchModeBtn from './SwitchModeBtn';
import { useTaskContext } from '@/context/TaskContext';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  const { viewMode } = useTaskContext();
  switch (mode) {
    case 'Side':
      return (
        <ModeSidebar open={isOpenMode && viewMode === 'Side'}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
    case 'Center':
      console.log({ center: isOpenMode });

      return (
        <ModeCenter
          open={isOpenMode && viewMode === 'Center'}
          header={<TaskModeHeader />}
        >
          <TaskDetail />
        </ModeCenter>
      );
    default:
      return (
        <ModeSidebar open={isOpenMode && viewMode === 'Side'}>
          <TaskModeHeader />
          <TaskDetail />
        </ModeSidebar>
      );
  }
};

export default TaskMode;
