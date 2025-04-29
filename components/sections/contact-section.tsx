"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ScrollReveal, FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a backend
    // Since this is static, we'll just simulate the form submission
    setFormSubmitted(true)
    
    // Create mailto link with form data
    const mailtoLink = `mailto:med.el.moumeny@gmail.com?subject=Contact from ${name}&body=${message} - From: ${email}`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="heading-animation">Get In Touch</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 shadow-soft rounded-2xl border border-border/50">
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      placeholder="med.el.moumeny@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Textarea
                      id="message"
                      placeholder="How can I help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-32 rounded-lg"
                    />
                  </motion.div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full group btn-lg"
                  whileTap={{ scale: 0.98 }}
                >
                    <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
                    Submit
                    </div>
                </motion.button>
                
                {formSubmitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-center text-muted-foreground"
                  >
                    This form will open your email client. In a real implementation, 
                    this would connect to a backend service.
                  </motion.p>
                )}
              </form>
            </FadeIn>
          </Card>
          
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.3}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:med.el.moumeny@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      med.el.moumeny@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+212679250688" className="text-muted-foreground hover:text-primary transition-colors">
                      +212-679-25-06-88
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Khenifra Morocco
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Let&apos;s Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you&apos;re looking to enhance your security posture, 
                  need custom data extraction solutions, or want to discuss a
                  full-stack development project, I&apos;m here to help.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m currently available for freelance projects, consulting work,
                  and potential full-time opportunities.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}