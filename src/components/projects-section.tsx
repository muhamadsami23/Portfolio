"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
  reverse?: boolean
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "project1",
      title: "University's Academic Portal",
      description:
        "A comprehensive system built for University to manage students, teachers and other staff. It comes with features like attendance, results, fee management, library management, and more.",
      image: "/upm.png?height=400&width=600",
      technologies: ["React", "Node.js", "MySQL", "TypeScript"],
      github: "https://github.com/muhamadsami23/academic-portal",
      demo: "https://academic-portal.example.com",
      featured: true,
    },
    {
      id: "project2",
      title: "Autonomous Space Rover Navigator",
      description:
        "An intelligent autonomous rover, capable of detecting obstacles and finding an optimal path or terrain terrain. Uses computer vision and machine learning to navigate in a simulated Mars environment.",
      image: "/rover.png?height=400&width=600",
      technologies: ["C++", "C", "Unity", "C#",'Data Structures'],
      github: "https://github.com/muhamadsami23/space-rover",
      featured: true,
      reverse: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-zinc-950 relative">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-teal-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Featured Projects</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A selection of my recent projects showcasing my technical expertise
          </p>
        </motion.div>

        {/* Featured Projects with Alternating Layout */}
        <div className="space-y-20 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`flex flex-col ${
                  project.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 transform rotate-3"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="relative w-full h-[300px] object-cover rounded-lg transform -rotate-3"
                  />
                </div>

                <div className="w-full md:w-1/2 relative z-10">
                  <h3 className="text-3xl font-bold text-teal-400 mb-4 -mt-8 relative z-20 bg-zinc-950 w-fit px-4 py-2">
                    {project.title}
                  </h3>

                  <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 -ml-4 md:-ml-12 relative">
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/projects" className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-4 bg-zinc-900 rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-3">
                <span className="pr-6 text-gray-100">View All Projects</span>
              </span>
              <span className="pl-6 text-teal-400 group-hover:text-gray-100 transition duration-200">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
