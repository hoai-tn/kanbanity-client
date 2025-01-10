
import KanbanBoard from "@/components/Kanban/Board";
import DndTest from "@/components/Kanban/dnd";
import { ICompanyPageParams } from "@/types";
import React from "react";
//Board page
const page = async ({ params }: ICompanyPageParams) => {
  const { company, workspace } = await params;
  return (
    <div>
      Board page{company}/ {workspace}

      <KanbanBoard />

      <DndTest/>
    </div>
  );
};

export default page;
