"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { IKanbanTask } from "@/types/kanban-board";
import { useTaskContext } from "@/context/TaskContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { ChevronDown, Clock, Edit } from "lucide-react";

interface TaskDetailProps {
  task?: IKanbanTask;
}

export default function TaskDetail({ task }: TaskDetailProps) {
  const { closeTask } = useTaskContext();
  
  const [description, setDescription] = useState(task?.description ?? "");
  const [isEditing, setIsEditing] = useState(false);
  console.log(task);
  if (!task) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No task selected</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Icons.task className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">Task</span>
        </div>
        <Button variant="ghost" size="icon" onClick={closeTask}>
          <Icons.x className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Title Section */}
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-semibold">{task.title}</h2>
              <Button variant="ghost" size="icon">
                <Icons.ellipsis className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Created {format(task.createdAt ?? new Date(), 'MMM d, yyyy')}</span>
              <span>•</span>
              <span>Task-{task.id}</span>
            </div>
          </div>

          {/* Status and Assignee */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <Button variant="outline" size="sm" className="h-7">
                {task.columnId}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Assignee:</span>
              <Button variant="outline" size="sm" className="h-7">
                <Avatar className="h-5 w-5 mr-2">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                {task.assigneeId ?? 'Unassigned'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Description</h3>
              {!isEditing && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              )}
            </div>
            {isEditing ? (
              <div className="space-y-2">
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add a more detailed description..."
                  className="min-h-[150px]"
                />
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm"
                    onClick={() => setIsEditing(false)}
                  >
                    Save
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setDescription(task.description ?? "");
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div 
                className="rounded-lg border bg-muted/40 p-4 text-sm cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                {description || "Add a more detailed description..."}
              </div>
            )}
          </div>

          {/* Subtasks */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Subtasks</h3>
              <Button variant="ghost" size="sm">
                <Icons.plus className="mr-2 h-4 w-4" />
                Add subtask
              </Button>
            </div>
            <div className="rounded-lg border">
              {task.subtasks?.length ? (
                task.subtasks.map(subtask => (
                  <div key={subtask.id} className="flex items-center gap-2 p-3 hover:bg-muted/50">
                    <input 
                      type="checkbox" 
                      checked={subtask.completed}
                      className="h-4 w-4" 
                    />
                    <span className="text-sm">{subtask.title}</span>
                  </div>
                ))
              ) : (
                <div className="p-3 text-sm text-muted-foreground">
                  No subtasks yet
                </div>
              )}
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-4">
            <Separator />
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Comments</h3>
              <span className="text-xs text-muted-foreground">
                {task.comments?.length ?? 0} comments
              </span>
            </div>
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea 
                  placeholder="Write a comment..." 
                  className="min-h-[100px]"
                />
                <div className="mt-2">
                  <Button size="sm">Comment</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Icons.archive className="mr-2 h-4 w-4" />
              Archive
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive">
              <Icons.trash className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Last edited {format(task.updatedAt ?? new Date(), 'MMM d, h:mma')}
          </div>
        </div>
      </div>
    </div>
  );
}
