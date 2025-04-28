"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  variants?: any
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "",
  variants
}: MotionWrapperProps) {
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = ""
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = ""
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.175, 0.885, 0.32, 1.275] // Custom spring-like animation
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1,
  className = ""
}: MotionWrapperProps & { staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollReveal({ children, className = "" }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}