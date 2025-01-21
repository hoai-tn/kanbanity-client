import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTaskContext } from "@/context/TaskContext";
import React from "react";
import SwitchModeBtn from "./SwitchModeBtn";

interface ModeCenterProps {
  children: React.ReactNode;
  open: boolean;
}

const ModeCenter = ({ children, open }: ModeCenterProps) => {
  const { closeTask } = useTaskContext();
  return (
    <Dialog open={open} onOpenChange={(e) => !e && closeTask()}>
      {/* <DialogHeader>
        <DialogTitle>Task Detail</DialogTitle>
        <SwitchModeBtn />
      </DialogHeader> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Task Detail</DialogTitle>
          <SwitchModeBtn />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModeCenter;
