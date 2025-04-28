"use client"

import { ScrollReveal, StaggerChildren, FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const paragraphs = [
  "I’m a Full-Stack Developer and Python Automation Specialist dedicated to helping startups and small businesses streamline operations, extract actionable insights, and build modern web experiences.",
  "With deep expertise in Python (Selenium, Pandas), JavaScript/TypeScript, React, and Node.js, I design and deliver secure, scalable solutions that save time, reduce costs, and fuel growth.",
  "I’m passionate about cybersecurity and open source technologies, and I’m always eager to learn and adapt to new challenges. My goal is to leverage my skills to create impactful solutions that drive success for my clients.",];

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="heading-animation">About Me</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren staggerDelay={0.15}>
            {paragraphs.map((paragraph, index) => (
              <motion.div key={index} variants={childVariants} className="mb-6">
                <p className="text-base leading-relaxed">
                  {paragraph.split(' ').map((word, wordIndex) => {
                    // Check if the word is a technical term
                    const technicalTerms = [
                      "cybersecurity", "security", "vulnerabilities", "Python", 
                      "data extraction", "ETL", "React", "Node.js", "cloud", 
                      "web vulnerabilities", "network security", "open source"
                    ]
                    const isTechnicalTerm = technicalTerms.some(term => 
                      word.toLowerCase().includes(term.toLowerCase())
                    )
                    
                    return isTechnicalTerm ? (
                      <span key={wordIndex} className="technical-term">
                        {word}{' '}
                      </span>
                    ) : (
                      <span key={wordIndex}>{word}{' '}</span>
                    )
                  })}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
          
          <FadeIn delay={1.2} className="mt-10 text-center">
            <a 
              href="#contact" 
              className="inline-block font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Interested in working together? Get in touch →
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}