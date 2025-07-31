"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Instagram, Send, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "moch.yunus.am@gmail.com",
    href: "mailto:moch.yunus.am@gmail.com",
    description: "Send me an email"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "mchyns",
    href: "https://github.com/mchyns",
    description: "Check out my repositories"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mchynss",
    href: "https://instagram.com/mchynss",
    description: "Follow me on Instagram"
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@wleooowleoooooo",
    href: "https://t.me/wleooowleoooooo",
    description: "Chat with me on Telegram"
  }
]

export function ContactSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/5">
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
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Don&apos;t hesitate to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          <p className="text-primary font-medium">{contact.value}</p>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Location */}
                  <motion.div 
                    className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-muted-foreground">Indonesia</p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Main CTA Card */}
              <Card className="p-8">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I&apos;m currently available for freelance work and open to discussing 
                    new opportunities. Whether you have a project in mind or just want 
                    to connect, I&apos;d love to hear from you.
                  </p>
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <a href="mailto:moch.yunus.am@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">7+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </CardContent>
                </Card>
              </div>

              {/* Availability Status */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">Current Status</h4>
                      <p className="text-sm text-muted-foreground">Available for freelance</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">Online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to start a project together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I&apos;m passionate about creating amazing digital experiences. 
                  Let&apos;s discuss your ideas and bring them to life!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="mailto:moch.yunus.am@gmail.com">
                      Start a Conversation
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com/mchyns" target="_blank" rel="noopener noreferrer">
                      View My Work
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
