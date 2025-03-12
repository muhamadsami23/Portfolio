"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900 relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-900/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 mb-6">
            I'm a developer with a strong command of programming, from fundamentals to advanced concepts. I also work with system hardware, integrating hardware and software to create innovative solutions. My passion lies in deeply understanding systems and continuously expanding my knowledge.

            </p>
            <p className="text-gray-400">
            Beyond tech, I thrive in teamwork, bringing fresh ideas and problem-solving skills to the table. Whether collaborating or leading, I stay adaptable and focused on finding effective solutions.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[500px] h-[400px]">
              {/* Background bubbles */}
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-teal-500/20 blur-xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ top: "20%", left: "10%" }}
              />
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-teal-500/10 blur-xl"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ top: "50%", right: "20%" }}
              />

              {/* Main monitor/screen */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-56 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700 overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Screen content */}
                <div className="h-6 bg-zinc-900 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  {/* Code editor content */}
                  <motion.div
                    className="h-4 w-3/4 bg-teal-500/20 rounded mb-2"
                    animate={{
                      width: ["60%", "75%", "60%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="h-4 w-1/2 bg-teal-500/15 rounded mb-2"
                    animate={{
                      width: ["40%", "50%", "40%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="h-4 w-2/3 bg-teal-500/10 rounded"
                    animate={{
                      width: ["50%", "65%", "50%"],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute w-12 h-12 bg-teal-500/20 rounded"
                animate={{
                  rotate: 360,
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ top: "20%", right: "15%" }}
              />
              <motion.div
                className="absolute w-8 h-8 bg-teal-500/30 rounded"
                animate={{
                  rotate: -360,
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ bottom: "25%", left: "20%" }}
              />

              {/* Small decorative elements */}
              <motion.div
                className="absolute w-3 h-3 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ top: "30%", left: "30%" }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ bottom: "35%", right: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
