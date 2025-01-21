import KanbanBoard from "@/components/Kanban";
import { ICompanyPageParams } from "@/types";
import React from "react";
//Board page
const page = async ({ params }: ICompanyPageParams) => {
  const { company, workspace } = await params;
  return (
    <div>
      <h2 className="text-2xl">
        Board page{company}/ {workspace}
      </h2>
      <KanbanBoard />
    </div>
  );
};

export default page;
