"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900 relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-900/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Me, Myself and I</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives my passion for development.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-200">Hello, my name is John Doe</h3>
          <p className="text-gray-400 mb-6">
            I'm a developer with a passion for systems programming and software development. With a strong foundation in
            low-level programming and data structures, I create efficient and optimized solutions. My expertise spans
            from assembly language to high-level application development, allowing me to understand and work with
            systems at multiple levels of abstraction.
          </p>
          <p className="text-gray-400">
            I am continuously learning and actively seeking opportunities to work on challenging projects that push the
            boundaries of what's possible with software. If you're looking for a developer who can deliver robust,
            efficient solutions, let's connect and discuss how I can contribute to your project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

