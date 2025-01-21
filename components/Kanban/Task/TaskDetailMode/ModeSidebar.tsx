import { increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
import clsx from "clsx";
import React from "react";

interface ModeSideProps {
  children: React.ReactNode;
  open: boolean;
}

const ModeSidebar = ({ children, open }: ModeSideProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={clsx(
        "bg-sidebar h-svh fixed top-0 right-0 max-w-[600px] w-full delay-500 transition-transform",
        open ? "w-[600px]" : "translate-x-full"
      )}
    >
      {children}
      <button onClick={() => dispatch(increment())}>increase</button>
    </div>
  );
};

export default ModeSidebar;
