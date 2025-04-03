"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function HomepageHero() {
  const { theme } = useTheme();

  return (
    <section className="w-full flex justify-center items-center min-h-[90vh] py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col items-center gap-8 text-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-full max-w-[800px]"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm"
            >
              Welcome to the Future of Task Management
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
            >
              Organize work with{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Kanbanity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto text-lg text-muted-foreground md:text-xl max-w-[600px]"
            >
              A powerful and intuitive Kanban board application that helps teams 
              collaborate, track progress, and deliver projects efficiently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 min-[400px]:flex-row justify-center"
            >
              <Link href="/dashboard">
                <Button size="lg" className="w-full min-[400px]:w-auto group relative overflow-hidden">
                  <span className="relative z-10">Start for Free</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-500/80 to-blue-500/80"
                    animate={{
                      x: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <Icons.arrowRight className="ml-2 h-4 w-4 relative z-10" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto backdrop-blur-sm">
                  See How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Futuristic 3D Grid Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative w-full h-[400px] max-w-[900px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + (i * 0.02),
                    duration: 0.4,
                  }}
                  className="relative group"
                >
                  <div className={`
                    absolute inset-0 rounded-md 
                    ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}
                    backdrop-blur-sm
                    group-hover:bg-primary/20 transition-all duration-300
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-lg bg-background/80 backdrop-blur-md border shadow-lg"
            >
              <div className="p-4">
                <div className="h-3 w-20 bg-primary/20 rounded mb-2" />
                <div className="h-2 w-32 bg-muted rounded" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-lg bg-background/80 backdrop-blur-md border shadow-lg"
            >
              <div className="p-4">
                <div className="h-3 w-24 bg-primary/20 rounded mb-2" />
                <div className="h-2 w-28 bg-muted rounded" />
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-8"
          >
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              >
                10K+
              </motion.span>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="h-12 w-[1px] bg-gradient-to-b from-primary/50 to-purple-500/50" />
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              >
                98%
              </motion.span>
              <span className="text-sm text-muted-foreground">Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const partners = [
  { name: "Company 1" },
  { name: "Company 2" },
  { name: "Company 3" },
  { name: "Company 4" },
  { name: "Company 5" },
]; 