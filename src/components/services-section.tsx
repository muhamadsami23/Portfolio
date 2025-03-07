"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, FileText, BookOpen, Search, ArrowRight, ExternalLink } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  technologies: string[]
  category: "development" | "other"
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<"development" | "other" | "all">("all")

  const services: Service[] = [
    {
      id: "systems-dev",
      title: "Systems Development",
      description: "Low-level system programming and optimization for performance-critical applications.",
      icon: <Code className="w-10 h-10 text-teal-400" />,
      category: "development",
      features: [
        "Embedded systems programming",
        "Device driver development",
        "Performance optimization",
        "Memory management",
        "System architecture design",
      ],
      technologies: ["C", "C++", "Assembly", "Linux", "RTOS"],
    },
    {
      id: "database-dev",
      title: "Database Development",
      description: "Design and implementation of efficient database solutions for complex data requirements.",
      icon: <Code className="w-10 h-10 text-teal-400" />,
      category: "development",
      features: [
        "Database design",
        "Query optimization",
        "Data modeling",
        "Migration strategies",
        "Performance tuning",
      ],
      technologies: ["SQL", "MongoDB", "Database Design", "Query Optimization"],
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description: "Professional content writing services for various platforms and purposes.",
      icon: <FileText className="w-10 h-10 text-teal-400" />,
      category: "other",
      features: [
        "Blog posts",
        "Technical documentation",
        "Website content",
        "Product descriptions",
        "SEO optimization",
      ],
      technologies: ["SEO", "Content Strategy", "WordPress", "Technical Writing"],
    },
    {
      id: "business-writing",
      title: "Business Writing",
      description: "Professional business document creation and consulting services.",
      icon: <BookOpen className="w-10 h-10 text-teal-400" />,
      category: "other",
      features: [
        "Business proposals",
        "Executive summaries",
        "Reports and presentations",
        "Marketing materials",
        "Corporate communications",
      ],
      technologies: ["Business Analysis", "Market Research", "Report Writing"],
    },
    {
      id: "research-writing",
      title: "Research Writing",
      description: "In-depth research and academic writing services.",
      icon: <Search className="w-10 h-10 text-teal-400" />,
      category: "other",
      features: [
        "Academic papers",
        "Research proposals",
        "Literature reviews",
        "Data analysis",
        "Methodology development",
      ],
      technologies: ["Research Methodology", "Data Analysis", "Academic Writing"],
    },
  ]

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const handleServiceClick = (id: string) => {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to your needs</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "all" ? "bg-teal-500 text-white" : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("development")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "development"
                  ? "bg-teal-500 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveCategory("other")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "other" ? "bg-teal-500 text-white" : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
            >
              Other Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg overflow-hidden transition-all duration-300 ${
                activeService === service.id ? "ring-2 ring-teal-500/50" : "hover:border-teal-500/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 cursor-pointer" onClick={() => handleServiceClick(service.id)}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-zinc-900/80 rounded-lg">{service.icon}</div>
                  <span className="text-xs text-teal-400 border border-teal-400/30 rounded-full px-2 py-1">
                    {service.category === "development" ? "Development" : "Service"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>

                <div className="flex items-center text-teal-400 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {activeService === service.id && (
                <motion.div
                  className="px-6 pb-6 pt-2 border-t border-zinc-700 bg-zinc-800/30"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-400 mr-2">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-teal-400 mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-zinc-900 text-gray-300 px-2 py-1 rounded-md border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`#contact`}
                    className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Request a quote
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

