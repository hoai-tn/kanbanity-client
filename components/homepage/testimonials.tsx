"use client";

import Image from "next/image";
import { Icons } from "@/components/icons";

export default function HomepageTestimonials() {
  return (
    <section
      id="testimonials"
      className="w-full flex justify-center items-center py-16 md:py-24"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="space-y-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <span className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
              Testimonials
            </span>
            <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Loved by teams
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of satisfied teams using Kanbanity.
            </p>
          </div>
          <div className="mx-auto grid gap-8 md:max-w-[64rem] md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between rounded-xl border bg-background p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Icons.task
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                  </div>
                  <p className="text-lg">{testimonial.text}</p>
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/10">
                    <div className="h-12 w-12 bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-medium text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Project Manager at TechCorp",
    text: "Kanbanity has completely transformed how our team manages projects. The intuitive interface and powerful features have made us more productive than ever.",
  },
  {
    name: "Sarah Williams",
    role: "Product Owner at Innovate Inc",
    text: "As a product owner, I need clear visibility into our development process. Kanbanity provides exactly that, allowing us to deliver faster with fewer roadblocks.",
  },
  {
    name: "Michael Chen",
    role: "Development Lead at DevStudio",
    text: "The flexibility and customization options in Kanbanity are unmatched. We've been able to tailor it perfectly to our agile development process.",
  },
]; 