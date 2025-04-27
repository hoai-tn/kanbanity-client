import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import HomepageFeatures from "@/components/homepage/features";
import HomepageHero from "@/components/homepage/hero";
import HomepageTestimonials from "@/components/homepage/testimonials";
import HomepageCTA from "@/components/homepage/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - could be moved to a separate component */}
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold inline-block">Kanbanity</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#features" className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                Features
              </Link>
              <Link href="#testimonials" className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                Testimonials
              </Link>
              <Link href="#pricing" className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/signin">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <HomepageHero />
        <HomepageFeatures />
        <HomepageTestimonials />
        <HomepageCTA />
      </main>
      
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ by <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Kanbanity Team</a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground">Terms</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
