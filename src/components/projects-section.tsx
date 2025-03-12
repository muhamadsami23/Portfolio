"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

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
      id: "project4",
      title: "University's Academic Portal",
      description:
        "A comprehensive system built for University to manage student's, teacher's and other faculty along with operations on the campus. Have three different modules for each, students, teachers and administration. Built using React Typescript, Node.js and MySQL.",
      image: "/upm.png?height=400&width=600",
      technologies: ["React", "Typescript", "Node.js", "MySQL"],
      github: "https://github.com/muhamadsami23/University-Academic-Portal",
      featured: false,
    },
    {
      id: "project5",
      title: "Autonomous Space Rover Navigator",
      description:
        "An intelligent autonomour rover, capable of capturing data and finding an optimal and obstacle free path on martian terrain. Uses advanced algorithms to navigate while maintain a track of the power usage.",
      image: "/rover.png?height=400&width=600",
      technologies: ["C", "C++", "Algorithm Design", "Unity"],
      github: "https://github.com/muhamadsami23",
      featured: false,
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

        {/* Mobile App Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-teal-500/30 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-teal-400">{project.title}</h3>
                    <span className="text-xs text-gray-400 border border-zinc-700 rounded-full px-2 py-1">
                      Featured Project
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

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
              </motion.div>
            ))}
        </div>

        {/* Other Projects with Alternating Layout */}
        <div className="space-y-20">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`flex flex-col ${project.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
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
      </div>
    </section>
  )
}

