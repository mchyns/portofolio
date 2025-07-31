"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Globe, Car, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Web Ojek Online",
    description: "A comprehensive online motorcycle taxi booking system with real-time tracking, driver management, and integrated payment system. Features include user registration, ride booking, GPS tracking, and payment processing.",
    image: "🏍️",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Google Maps API"],
    category: "Web Application",
    icon: Car,
    features: [
      "Real-time GPS tracking",
      "Payment gateway integration", 
      "Driver & passenger management",
      "Admin dashboard"
    ]
  },
  {
    id: 2,
    title: "Sistem Reservasi Restoran",
    description: "An elegant restaurant reservation system that allows customers to book tables online, view menus, and manage reservations. Includes admin panel for restaurant management and table availability tracking.",
    image: "🍽️",
    technologies: ["PHP", "MySQL", "jQuery", "CSS", "Bootstrap"],
    category: "Booking System",
    icon: Globe,
    features: [
      "Table booking system",
      "Menu management",
      "Customer notifications",
      "Reservation analytics"
    ]
  },
  {
    id: 3,
    title: "Booking Tiket Wisata Online",
    description: "A tourism ticket booking platform that enables users to browse destinations, book tickets online, and receive digital tickets. Features secure payment processing and ticket verification system.",
    image: "🎫",
    technologies: ["Laravel", "Vue.js", "MySQL", "Payment Gateway", "PDF Generator"],
    category: "E-Commerce",
    icon: Plane,
    features: [
      "Online ticket booking",
      "Digital ticket generation",
      "Payment processing",
      "Destination management"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This modern portfolio website built with Next.js, featuring responsive design, dark/light theme toggle, smooth animations, and interactive components. Showcases my skills and projects in an elegant way.",
    image: "💼",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
    category: "Portfolio",
    icon: Globe,
    features: [
      "Responsive design",
      "Dark/Light theme",
      "Smooth animations",
      "Modern UI components"
    ]
  }
]

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on during my university studies. 
              Each project represents a learning journey and showcases different technical skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Project Image/Icon */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl mb-4">{project.image}</div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">
                  Want to see more?
                </h3>
                <p className="text-muted-foreground mb-6">
                  These are just a few examples of my work. I&apos;m always working on new projects 
                  and exploring different technologies. Check out my GitHub for more repositories!
                </p>
                <Button size="lg" asChild>
                  <a
                    href="https://github.com/mchyns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
