"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["PHP", "Laravel", "Python", "Node.js", "MySQL", "PostgreSQL"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Progressive Web Apps"]
  },
  {
    category: "Tools & Others",
    icon: Code,
    technologies: ["Git", "Docker", "VS Code", "Figma", "Postman", "Linux"]
  }
]

const experiences = [
  {
    title: "Web Ojek Online",
    description: "Developed a comprehensive online motorcycle taxi booking system with real-time tracking and payment integration.",
    technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"]
  },
  {
    title: "Sistem Reservasi Restoran",
    description: "Built a restaurant reservation system with table management, menu display, and booking functionality.",
    technologies: ["PHP", "MySQL", "jQuery", "CSS"]
  },
  {
    title: "Booking Tiket Wisata Online",
    description: "Created an online tourism ticket booking platform with payment gateway and ticket verification system.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Payment Gateway"]
  }
]

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m a passionate developer with experience in various programming languages and frameworks. 
              Currently focused on building innovative web applications and expanding my skill set.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Hello! I&apos;m Moch Yunus, a dedicated developer passionate about creating 
                      innovative digital solutions. My journey in programming began during my 
                      university years, where I discovered my love for building web applications 
                      that solve real-world problems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in full-stack development with expertise in modern frameworks 
                      like Laravel for backend development and Next.js for frontend solutions. 
                      My goal is to create user-friendly, efficient, and scalable applications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">Email:</span>
                      <span className="text-muted-foreground">moch.yunus.am@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">Location:</span>
                      <span className="text-muted-foreground">Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">Status:</span>
                      <span className="text-muted-foreground">Student & Developer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-12">
              Technical <span className="text-primary">Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">{skill.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-center mb-12">
              Project <span className="text-primary">Experience</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
