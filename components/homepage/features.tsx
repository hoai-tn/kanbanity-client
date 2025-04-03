"use client";

import { Icons } from "@/components/icons";

export default function HomepageFeatures() {
  return (
    <section
      id="features"
      className="w-full flex justify-center items-center bg-slate-50/50 py-16 dark:bg-transparent md:py-24"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="space-y-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <span className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
              Features
            </span>
            <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Everything you need
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Powerful features to help your team stay organized and productive.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-lg border bg-background p-8 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-primary/10 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg" />
              </div>
            ))}
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Kanbanity is constantly evolving with new features and improvements.
              <br className="hidden sm:inline" />
              Check our{" "}
              <a
                href="#"
                className="underline underline-offset-4"
              >
                roadmap
              </a>{" "}
              to see what&apos;s coming next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Drag & Drop Interface",
    description:
      "Easily move tasks between columns with our intuitive drag and drop interface.",
    icon: Icons.task,
  },
  {
    title: "Customizable Boards",
    description:
      "Create and customize boards for different projects or workflows to suit your needs.",
    icon: Icons.settings,
  },
  {
    title: "Team Collaboration",
    description:
      "Invite team members to collaborate on boards and tasks in real-time.",
    icon: Icons.team,
  },
  {
    title: "Task Management",
    description:
      "Add detailed descriptions, checklists, attachments, and comments to tasks.",
    icon: Icons.check,
  },
  {
    title: "Progress Tracking",
    description:
      "Track progress with visual indicators and status updates for all your tasks.",
    icon: Icons.chart,
  },
  {
    title: "Responsive Design",
    description:
      "Access your boards from any device with our responsive and adaptive design.",
    icon: Icons.laptop,
  },
]; 