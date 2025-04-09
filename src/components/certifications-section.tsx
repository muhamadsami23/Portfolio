"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  link?: string
}

const certifications: Certification[] = [
  {
    id: "cs50p",
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "2024",
    description:
      "Comprehensive introduction to Python programming, covering data structures, algorithms, and problem-solving techniques.",
    link: "",
  },
  {
    id: "googless",
    title: "Google Soft Skills Program",
    issuer: "PAFLA (Pakistan Freelancer Association, Powered by Google",
    date: "2024",
    description:
      "Soft skills program, including Communication, Networking, Problem Solving and Management",
    link: "",
  },
]

const achievements: Certification[] = [
  {
    id: "spacetech-hackathon",
    title: "Winner - SpaceTech Hackathon",
    issuer: "KASBIT (Khadim Ali Shah Bukhari Institute of Technology)",
    date: "Apr 2024",
    description: "Developed an Autonomous Rover Navigator.",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-zinc-950 relative">
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Certifications Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Certifications</h2>
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
                  <h3 className="text-lg font-bold text-gray-200">{cert.title}</h3>
                  <span className="text-sm text-teal-400">{cert.date}</span>
                  <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 text-sm"
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
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
                  <h3 className="text-lg font-bold text-gray-200">{ach.title}</h3>
                  <span className="text-sm text-teal-400">{ach.date}</span>
                  <p className="text-sm text-gray-400 mb-3">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}