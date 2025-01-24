import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useTaskContext } from '@/context/TaskContext';
import React, { useEffect } from 'react';
import SwitchModeBtn from './SwitchModeBtn';

interface ModeCenterProps {
  children: React.ReactNode;
  header: React.ReactNode;
  open: boolean;
}

const ModeCenter = ({ children, open, header }: ModeCenterProps) => {
  const { closeTask } = useTaskContext();
  useEffect(() => {
    console.log('open', open);
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={closeTask}>
      {header}
      <DialogContent hideClose>
        <DialogHeader className='pt-10'>
          <DialogTitle>Task Detail</DialogTitle>
        </DialogHeader>
        {children}
        <div className='absolute right-0 top-0 w-full'>{header}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ModeCenter;
