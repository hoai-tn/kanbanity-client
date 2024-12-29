import { ICompanyPageParams } from "@/types";
import React from "react";
//Overview page
const page = async ({ params }: ICompanyPageParams) => {
  const { company, workspace } = await params;
  return (
    <div>
      Overview page{company}/ {workspace}
    </div>
  );
};

export default page;
