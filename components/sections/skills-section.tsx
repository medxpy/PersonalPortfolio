"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal, ScaleIn } from "@/components/motion-wrapper"
import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { 
  Shield, 
  Code, 
  Cloud, 
  Palette,
  Terminal,
  Database,
  Network,
  Lock,
  Server,
  Cpu,
  Layout,
  Users
} from "lucide-react"

const skillsData = [
  {
    title: "Networking & Security",
    icon: Shield,
    skills: [
      { name: "Network Penetration Testing", level: 90 },
      { name: "Bug Bounty Hunting", level: 90 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Web Application Security", level: 88 },
    ],
    color: "primary",
    hoverIcon: Lock
  },
  {
    title: "Dev & Automation",
    icon: Code,
    skills: [
      { name: "Python Development", level: 92 },
      { name: "Web Scraping & Data Mining", level: 95 },
      { name: "API Integration", level: 88 },
      { name: "NodeJs Development", level: 82 },
    ],
    color: "accent",
    hoverIcon: Terminal
  },
  {
    title: "Infrastructure & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS Architecture", level: 85 },
      { name: "Docker & Containerization", level: 90 },
      { name: "CI/CD Pipeline Setup", level: 82 },
      { name: "Serverless", level: 78 },
    ],
    color: "secondary",
    hoverIcon: Server
  },
  {
    title: "Front-End & UX",
    icon: Palette,
    skills: [
      { name: "React Development", level: 88 },
      { name: "UI/UX Principles", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "Tailwind CSS", level: 90 },],
    color: "destructive",
    hoverIcon: Layout
  }
]

export function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="heading-animation">Skills & Expertise</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon
            const HoverIcon = category.hoverIcon
            const isHovered = hoveredCard === index
            
            return (
              <ScaleIn key={index} delay={0.1 * index} className="flex">
                <Card 
                  className={`w-full shadow-soft rounded-2xl transition-all duration-300 hover:shadow-md ${
                    isHovered ? `border-${category.color}/50` : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-${category.color} h-10 w-10`}
                      >
                        {isHovered ? <HoverIcon size={28} /> : <Icon size={28} />}
                      </motion.div>
                      <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                        {index + 1}/4
                      </span>
                    </div>
                    <CardTitle className={`text-xl font-bold text-${category.color}`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="progress-bar">
                            <motion.div 
                              className={`progress-value bg-${category.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1,
                                delay: 0.2 * skillIndex,
                                type: "spring",
                                stiffness: 50
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}