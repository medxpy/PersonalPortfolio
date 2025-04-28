"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, SlideIn } from "@/components/motion-wrapper"

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" className="text-primary">
          <pattern
            id="hero-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 20H40M20 0V40" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                Building{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block text-primary"
              >
                Secure
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block"
              >
                ,{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block text-accent"
              >
                Scalable
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="inline-block"
              >
                {" "}Systems
              </motion.span>
            </h1>
          </FadeIn>

          <SlideIn delay={1.2}>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              <span className="font-medium">Cyber Security Specialist</span> • <span className="font-medium">Python Scraping & Data Extraction</span> • <span className="font-medium">Full-Stack Dev</span>
            </p>
          </SlideIn>

          <FadeIn delay={1.4}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="rounded-full group"
            >
              See My Projects
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </FadeIn>

          {/* Animated circles in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 0.05,
                transition: { duration: 1.5, delay: 0.5 } 
              }}
              className="absolute inset-0 rounded-full border-4 border-primary"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 0.7, 
                opacity: 0.05,
                transition: { duration: 1.5, delay: 0.8 } 
              }}
              className="absolute inset-0 rounded-full border-4 border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}