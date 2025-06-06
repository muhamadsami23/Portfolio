"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-300">Hello, I'm </span>
              <span className="text-teal-400">Muhammad Sami</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">Software Developer</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
            Crafting seamless digital experiences, blending logic with creativity to build solutions that are as efficient as they are elegant. Whether it's structuring complex systems or designing intuitive user interactions, I thrive on turning ideas into reality with precision and purpose.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg transform rotate-6"></div>
              <div className="relative bg-zinc-900 p-2 rounded-lg transform -rotate-3 border border-zinc-800 shadow-xl">
                <img src="/155666362.jpeg?height=400&width=320" alt="Muhammad Sami" className="rounded w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-teal-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
