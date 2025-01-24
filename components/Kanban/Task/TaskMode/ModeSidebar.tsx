import { useTaskContext } from '@/context/TaskContext';
import { increment } from '@/lib/features/counter/counterSlice';
import { useAppDispatch } from '@/lib/hooks';
import clsx from 'clsx';
import { ShieldCloseIcon, X } from 'lucide-react';
import React from 'react';

interface ModeSideProps {
  children: React.ReactNode;
  open: boolean;
}

const ModeSidebar = ({ children, open }: ModeSideProps) => {
  const { closeTask } = useTaskContext();
  const dispatch = useAppDispatch();

  return (
    <div
      className={clsx(
        'fixed right-0 top-0 h-svh w-full max-w-[600px] bg-sidebar transition-transform delay-100',
        open ? 'w-[600px]' : 'translate-x-full',
      )}
    >
      {children}
      {/* <button onClick={() => dispatch(increment())}>increase</button> */}
    </div>
  );
};

export default ModeSidebar;
