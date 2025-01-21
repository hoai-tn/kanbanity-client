"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTaskContext } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
  };
}
export default function TaskCard({ task }: TaskCardProps) {
  const router = useRouter();
  const { setOpenTaskId } = useTaskContext();

  const handleOpenTask = () => {
    console.log("set task " + task.id);
    // router.push(`?t=${task.id}&view=sidebar`);
    setOpenTaskId(task.id);
  };
  return (
    <Card className="text-task-foreground bg-task" onClick={handleOpenTask}>
      <CardHeader className="text-card-foreground">{task.title}</CardHeader>
      <CardContent>
        {task.title} | {task.id}
      </CardContent>
    </Card>
  );
}
