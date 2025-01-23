import { Button } from '@/components/ui/button';
import { useTaskContext } from '@/context/TaskContext';
import { FullscreenIcon, MinimizeIcon, SidebarCloseIcon } from 'lucide-react';
import { ModeView } from './index';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';
import clsx from 'clsx';
const Icons: { icon: React.ReactNode; mode: ModeView }[] = [
  {
    icon: <FullscreenIcon />,
    mode: 'Full',
  },
  {
    icon: <MinimizeIcon />,
    mode: 'Center',
  },
  {
    icon: <SidebarCloseIcon />,
    mode: 'Side',
  },
];
const SwitchModeBtn = () => {
  const { setViewMode } = useTaskContext();
  const [currentMode, setCurrentMode] = useState<ModeView>('Side');

  const handleModeChange = (mode: ModeView) => {
    setViewMode(mode);
    setCurrentMode(mode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          {Icons.find((icon) => icon.mode === currentMode)?.icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex w-auto min-w-0'>
        {Icons.map((icon, index) => (
          <DropdownMenuItem
            key={index}
            className={clsx(
              'text-task-foreground [&>svg]:size-8',
              icon.mode === currentMode && 'bg-accent',
            )}
            onClick={() => handleModeChange(icon.mode)}
          >
            {icon.icon}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchModeBtn;
