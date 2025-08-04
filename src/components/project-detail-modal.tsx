"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, Code, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  challenges?: string[]
  duration?: string
  teamSize?: string
  myRole?: string
  results?: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <project.icon className="w-8 h-8 text-primary" />
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image/Icon */}
          <div className="relative h-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <div className="text-6xl">{project.image}</div>
            <Badge 
              variant="secondary" 
              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
            >
              {project.category}
            </Badge>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Project Details
                </h3>
                <div className="space-y-2 text-sm">
                  {project.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{project.duration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Team Size:</span>
                      <span className="text-muted-foreground">{project.teamSize}</span>
                    </div>
                  )}
                  {project.myRole && (
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">My Role:</span>
                      <span className="text-muted-foreground">{project.myRole}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Long Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.longDescription}
                </p>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Results & Impact</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            {project.githubUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="flex-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <Button variant="outline" disabled className="flex-1">
                Academic Project - Source Restricted
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
