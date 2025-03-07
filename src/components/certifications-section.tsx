"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  image: string
  link?: string
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      id: "cert1",
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      description:
        "Comprehensive course covering modern web development technologies including React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://udemy.com",
    },
    {
      id: "cert2",
      title: "React Native Masterclass",
      issuer: "Coursera",
      date: "2021",
      description: "Advanced mobile app development using React Native for cross-platform applications.",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://coursera.org",
    },
    {
      id: "cert3",
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "2021",
      description: "Principles of user interface and user experience design for digital products.",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://interaction-design.org",
    },
    {
      id: "cert4",
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2020",
      description: "Cloud computing expertise with focus on developing and maintaining applications on AWS.",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://aws.amazon.com/certification/",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-zinc-950 relative">
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Certifications</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-teal-500/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                    <Award className="w-8 h-8 text-teal-400" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-200">{cert.title}</h3>
                    <span className="text-xs text-teal-400 border border-teal-400/30 rounded-full px-2 py-1">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-3">{cert.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Issued by: {cert.issuer}</span>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 text-sm"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-teal-400 rounded-md transition-colors"
          >
            <Award className="w-5 h-5" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

