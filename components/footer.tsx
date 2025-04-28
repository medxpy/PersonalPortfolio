import Link from "next/link"
import { FadeIn } from "@/components/motion-wrapper"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">MedPyDev</h3>
              <p className="text-muted-foreground max-w-xs">
                Building secure, scalable systems for businesses and individuals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Connect</h3>
              <div className="flex space-x-4">
                <Link href="https://github.com/medxpy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://x.com/medpydev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.linkedin.com/in/mohamed-elmoumeny/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:med.el.moumeny@gmail.com" className="hover:text-primary transition-colors">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MedPyDev. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}