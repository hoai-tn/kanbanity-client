import { ICompanyPageParams } from "@/types";

const Page = async ({
  params,
}: ICompanyPageParams) => {
  const { company, workspace } = await params;

  return (
    <div>
      {company}/ {workspace}
    </div>
  );
};

export default Page;
