"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Car, Plane, ShoppingBag, BarChart3, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ProjectDetailModal } from "./project-detail-modal"

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

const projects = [
  {
    id: 1,
    title: "E-commerce Jamu Madura",
    description: "Platform e-commerce untuk produk jamu tradisional dengan fitur chatbot AI",
    longDescription: "Platform e-commerce komprehensif yang khusus dirancang untuk mempromosikan dan menjual produk jamu tradisional Madura. Sistem ini dilengkapi dengan chatbot AI yang dapat memberikan rekomendasi produk berdasarkan keluhan kesehatan pengguna, informasi detail tentang manfaat jamu, dan panduan penggunaan yang tepat.",
    image: "�",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Stripe", "Socket.io"],
    category: "Full Stack",
    icon: ShoppingBag,
    features: [
      "Katalog produk jamu dengan detail manfaat dan komposisi",
      "Chatbot AI untuk konsultasi dan rekomendasi produk",
      "Sistem pembayaran terintegrasi dengan multiple gateway",
      "Dashboard admin untuk manajemen produk dan pesanan"
    ],
    challenges: [
      "Implementasi NLP untuk memahami keluhan kesehatan dalam bahasa Indonesia",
      "Integrasi multiple payment gateway sesuai regulasi Indonesia",
      "Optimasi performa untuk handling ribuan produk jamu",
      "Implementasi sistem rekomendasi berbasis AI yang akurat"
    ],
    results: [
      "Peningkatan awareness produk jamu tradisional sebesar 40%",
      "Tingkat konversi penjualan mencapai 15% melalui rekomendasi chatbot",
      "User engagement rate 85% dengan rata-rata session 8 menit",
      "Feedback positif 92% dari pengguna untuk fitur chatbot"
    ],
    duration: "4 bulan",
    teamSize: "3 orang",
    myRole: "Full Stack Developer & AI Integration Specialist",
    githubUrl: "https://github.com/mchyns/jamu-madura-ecommerce",
    liveUrl: "https://jamu-madura.vercel.app"
  },
  {
    id: 2,
    title: "Leukemia Classification System",
    description: "Sistem klasifikasi leukemia menggunakan deep learning dan computer vision",
    longDescription: "Sistem klasifikasi otomatis untuk mendeteksi dan mengklasifikasikan jenis leukemia berdasarkan analisis citra mikroskopis sel darah. Menggunakan teknologi deep learning dengan arsitektur CNN yang telah dioptimasi khusus untuk analisis medical imaging. Sistem ini dapat membantu tenaga medis dalam proses diagnosis awal dengan akurasi tinggi.",
    image: "🔬",
    technologies: ["Python", "TensorFlow", "OpenCV", "Streamlit", "NumPy", "Pandas", "Scikit-learn"],
    category: "AI/ML",
    icon: BarChart3,
    features: [
      "Klasifikasi 4 jenis leukemia utama (ALL, AML, CLL, CML)",
      "Preprocessing otomatis untuk normalisasi citra",
      "Visualisasi hasil analisis dengan confidence score",
      "Batch processing untuk multiple samples"
    ],
    challenges: [
      "Handling dataset yang tidak seimbang antar kelas",
      "Optimasi model untuk akurasi tinggi dengan waktu inferensi cepat",
      "Implementasi data augmentation yang sesuai untuk medical imaging",
      "Validasi hasil dengan standar medical yang ketat"
    ],
    results: [
      "Akurasi klasifikasi mencapai 94.5% pada test dataset",
      "Precision rata-rata 93.2% untuk semua kelas leukemia",
      "Recall rate 94.8% untuk deteksi early-stage leukemia",
      "Waktu inferensi rata-rata 2.3 detik per sample"
    ],
    duration: "6 bulan",
    teamSize: "Solo project",
    myRole: "ML Engineer & Data Scientist",
    githubUrl: "https://github.com/mchyns/leukemia-classification"
  },
  {
    id: 3,
    title: "Web Ojek Online",
    description: "A comprehensive online motorcycle taxi booking system with real-time tracking, driver management, and integrated payment system. Features include user registration, ride booking, GPS tracking, and payment processing.",
    longDescription: "Sistem pemesanan ojek online yang komprehensif dengan fitur pelacakan real-time, manajemen driver, dan sistem pembayaran terintegrasi. Platform ini memungkinkan pengguna untuk memesan ojek, melacak perjalanan secara real-time, dan melakukan pembayaran dengan aman.",
    image: "�️",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Google Maps API"],
    category: "Web Application",
    icon: Car,
    features: [
      "Real-time GPS tracking",
      "Payment gateway integration", 
      "Driver & passenger management",
      "Admin dashboard"
    ],
    duration: "3 bulan",
    teamSize: "4 orang",
    myRole: "Backend Developer"
  },
  {
    id: 4,
    title: "Booking Tiket Wisata Online",
    description: "A tourism ticket booking platform that enables users to browse destinations, book tickets online, and receive digital tickets. Features secure payment processing and ticket verification system.",
    longDescription: "Platform pemesanan tiket wisata online yang memungkinkan pengguna untuk menjelajahi destinasi, memesan tiket secara online, dan menerima tiket digital. Dilengkapi dengan sistem pembayaran yang aman dan sistem verifikasi tiket.",
    image: "🎫",
    technologies: ["Laravel", "Vue.js", "MySQL", "Payment Gateway", "PDF Generator"],
    category: "E-Commerce",
    icon: Plane,
    features: [
      "Online ticket booking",
      "Digital ticket generation",
      "Payment processing",
      "Destination management"
    ],
    duration: "2 bulan",
    teamSize: "2 orang",
    myRole: "Full Stack Developer"
  }
]

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

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
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleViewDetails(project)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Detail
                        </Button>
                        {project.githubUrl ? (
                          <Button size="sm" variant="outline" className="flex-1" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled className="flex-1">
                            <Github className="w-4 h-4 mr-2" />
                            Private
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" className="flex-1" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
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

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  )
}
