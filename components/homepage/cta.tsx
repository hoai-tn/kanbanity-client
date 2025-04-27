"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function HomepageCTA() {
  return (
    <section id="pricing" className="w-full flex justify-center items-center py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
            Pricing
          </span>
          <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the perfect plan for your team's needs.
          </p>
          
          <div className="mt-8 grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="relative rounded-xl border bg-background p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center justify-center">
                <Icons.user className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Free</h3>
              <p className="mb-2 text-4xl font-bold">$0</p>
              <p className="mb-4 text-sm text-muted-foreground">Perfect for individuals getting started</p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Up to 3 boards</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic task management</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited personal tasks</span>
                </li>
              </ul>
              <Link href="/signup" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="relative rounded-xl border-2 border-primary bg-background p-8 shadow-lg transition-all">
              <div className="absolute -top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </div>
              <div className="mb-4 flex items-center justify-center">
                <Icons.team className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Team</h3>
              <p className="mb-2 text-4xl font-bold">$12<span className="text-sm font-normal text-muted-foreground">/user/mo</span></p>
              <p className="mb-4 text-sm text-muted-foreground">Great for teams working together</p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited boards</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced task management</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link href="/signup/team" className="w-full">
                <Button size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            
            <div className="relative rounded-xl border bg-background p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center justify-center">
                <Icons.settings className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
              <p className="mb-2 text-4xl font-bold">Custom</p>
              <p className="mb-4 text-sm text-muted-foreground">For large organizations with specific needs</p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>All Team features</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced security features</span>
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-primary" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/dashboard">
              <Button size="lg">
                Try for Free
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 