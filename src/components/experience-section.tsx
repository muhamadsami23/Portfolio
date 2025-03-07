"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading the frontend development team in building modern web applications using React and Next.js.",
      responsibilities: [
        "Architected and implemented the company's design system using React and Tailwind CSS",
        "Improved application performance by 40% through code optimization and lazy loading",
        "Mentored junior developers and conducted code reviews to ensure code quality",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      location: "London, UK",
      period: "2020 - 2022",
      description: "Developed responsive web applications and implemented UI/UX designs for various clients.",
      responsibilities: [
        "Built responsive web applications using React, Redux, and TypeScript",
        "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment",
        "Collaborated with backend developers to integrate RESTful APIs",
        "Participated in agile development processes including daily stand-ups and sprint planning",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations",
      location: "Berlin, Germany",
      period: "2018 - 2020",
      description: "Started as an intern and grew into a full-time role developing websites and web applications.",
      responsibilities: [
        "Developed and maintained websites using HTML, CSS, and JavaScript",
        "Assisted in the migration of legacy applications to modern frameworks",
        "Created responsive email templates for marketing campaigns",
        "Collaborated with the design team to implement visual elements",
      ],
    },
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
          {/* Timeline line */}
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
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-teal-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-1.5"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 ml-6 md:ml-0" : "md:pl-12 ml-6 md:ml-auto"}`}>
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
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <span className="text-teal-400 mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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

