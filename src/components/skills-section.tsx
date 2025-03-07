"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
}

export default function SkillsSection() {
  const programmingSkills: Skill[] = [
    {
      name: "C",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "C++",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Data Structures",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Python",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Assembly",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "SQL",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-zinc-950 relative">
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-teal-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Technical Skills</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Core technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {programmingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-zinc-900 rounded-lg flex items-center justify-center mb-3 border border-zinc-800 hover:border-teal-500/30 transition-colors">
                <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-12 h-12" />
              </div>
              <h4 className="text-gray-300 font-medium text-center">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

