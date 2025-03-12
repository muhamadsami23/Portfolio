"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
  link?: string
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Business Development Executive",
      company: "1Click",
      period: "Sep 2021 - Nov 2022",
      achievements: [
        "Maintained a 4.9-star rating on the Freelancer.com profile, ensuring high client satisfaction.",
        "Closed 30-50 new projects per month, consistently meeting or exceeding company targets.",
        "Acquired up to 40% new clients monthly."
      ],
      link: "https://1click.com.pk/"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-zinc-900 relative">
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Work Experience</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-teal-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-1.5"></div>

                <div className="md:w-1/2 md:pr-12 ml-6 md:ml-0">
                  <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-teal-500/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-200">{exp.title}</h3>
                      <span className="text-teal-400 text-sm font-medium px-2 py-1 bg-teal-400/10 rounded-full">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-teal-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <span className="text-teal-400 mr-2">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.link && (
                      <div className="mt-4">
                        <a href={exp.link} className="text-teal-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                          Visit Company Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
