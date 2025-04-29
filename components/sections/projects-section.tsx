"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, StaggerChildren } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    title: "Startup Analytics Dashboard",
    description: "An interactive analytics dashboard for startups, featuring real-time metrics visualization, user analytics, revenue tracking, and engagement monitoring. Published on Apr 23, 2025.",
    image: "https://i.imgur.com/7Sao3rr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Chart.js", "Tailwind CSS", "Vite", "Framer Motion"],
    links: {
      github: "https://github.com/medxpy/React-Admin-Dashboard",
      live: "https://medxpy.github.io/React-Admin-Dashboard/"
    }
  },
  {
    title: "This Portfolio",
    description: "A fully static Next.js portfolio site with dark/light mode toggle, showcasing my work and built with TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/medxpy/PersonalPortfolio",
      live: "https://medxpy.github.com/PersonalPortfolio"
    }
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: { 
    y: -10,
    transition: { duration: 0.3 }
  }
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="heading-animation">Featured Projects</span>
          </h2>
        </ScrollReveal>

        <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full shadow-soft rounded-2xl overflow-hidden border border-border/50 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                  <Button variant="link" asChild className="group">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}