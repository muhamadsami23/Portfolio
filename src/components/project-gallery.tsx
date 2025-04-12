"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Github, ExternalLink, FileText, Code, Palette, Layers, ArrowRight, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: "software" | "content" | "design" | "other"
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
  longDescription?: string
}

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const projects: Project[] = [
    // Software Development Projects
    {
      id: "project1",
      title: "University's Academic Portal",
      description:
        "A comprehensive system built for University to manage students, teachers and other staff. It comes with features like attendance, results, fee management, library management, and more.",
      longDescription:
        "This academic portal revolutionizes how universities manage their administrative tasks. Built with a focus on user experience and efficiency, it provides separate interfaces for students, faculty, and administrative staff.\n\nKey features include real-time attendance tracking, grade management, course registration, fee payment processing, and comprehensive reporting tools. The system also includes a library management module with book tracking, reservations, and fine calculations.\n\nThe architecture follows a microservices approach, with separate services handling different aspects of the system, all communicating through a well-defined API. This ensures scalability and maintainability as the system grows.",
      image: "/upm.png?height=300&width=500",
      category: "software",
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
      longDescription:
        "The Autonomous Space Rover Navigator is a cutting-edge project that combines robotics, computer vision, and machine learning to create a rover capable of navigating unknown terrains without human intervention.\n\nThe system uses a combination of sensors including LIDAR, stereo cameras, and infrared sensors to create a 3D map of the environment. A custom path-finding algorithm then determines the optimal route while avoiding obstacles and dangerous terrain.\n\nThe machine learning component allows the rover to improve its navigation capabilities over time by learning from previous experiences. It can identify different types of terrain and adjust its movement strategy accordingly.\n\nThe project was tested in a Mars-like environment simulation with various obstacles, slopes, and terrain types. The rover successfully navigated through 95% of the test scenarios without human intervention.",
      image: "/rover.png?height=300&width=500",
      category: "software",
      technologies: ["C++", "C", "Unity", "C#",'Data Structures'],
      github: "https://github.com/muhamadsami23/space-rover",
      featured: true,
    },
    // {
    //   id: "project3",
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    //   longDescription:
    //     "This e-commerce platform provides businesses with everything they need to set up and run an online store. The system includes comprehensive product management, inventory tracking, order processing, and customer management features.\n\nThe frontend is built with React and Redux, providing a smooth and responsive user experience. The backend uses Node.js with Express and MongoDB for data storage, with separate services handling authentication, product management, and order processing.\n\nKey features include a sophisticated product search with filtering and sorting options, a streamlined checkout process with multiple payment options (integrated with Stripe), order tracking, and a customer account system with order history and saved payment methods.\n\nThe platform also includes an admin dashboard for store owners to manage products, view analytics, process orders, and handle customer inquiries.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "software",
    //   technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API", "Express", "JWT", "AWS S3"],
    //   github: "https://github.com/muhamadsami23/ecommerce-platform",
    //   demo: "https://ecommerce-demo.example.com",
    // },

    // // Content Writing Projects
    // {
    //   id: "project4",
    //   title: "Technical Documentation Series",
    //   description:
    //     "A comprehensive series of technical documentation for a software product, including user guides, API documentation, and developer tutorials.",
    //   longDescription:
    //     "This technical documentation series was created for a complex enterprise software product to help users and developers understand and utilize the system effectively. The documentation is structured in a hierarchical manner, starting with high-level concepts and gradually diving into more detailed technical aspects.\n\nThe series includes:\n\n1. User Guides: Step-by-step instructions for end-users, with screenshots and examples for common tasks and workflows.\n\n2. Administrator Guides: Detailed documentation for system administrators, covering installation, configuration, security, and maintenance.\n\n3. API Documentation: Comprehensive documentation of all API endpoints, including request/response formats, authentication methods, error handling, and code examples in multiple programming languages.\n\n4. Developer Tutorials: A series of tutorials for developers looking to extend or integrate with the system, including sample projects and best practices.\n\nThe documentation was created using a docs-as-code approach, with all content stored in Markdown format in a Git repository, allowing for version control and collaborative editing. A custom documentation site was built using Docusaurus, with features like full-text search, versioning, and interactive API examples.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "content",
    //   technologies: ["Technical Writing", "Markdown", "Documentation", "API Reference", "Docusaurus", "Git"],
    //   demo: "https://docs.example.com",
    // },
    // {
    //   id: "project5",
    //   title: "Technology Blog Articles",
    //   description:
    //     "A collection of in-depth articles on emerging technologies, programming best practices, and industry trends.",
    //   longDescription:
    //     'This collection of technology blog articles covers a wide range of topics in the tech industry, from emerging technologies to programming best practices and industry trends. Each article is thoroughly researched and written to provide valuable insights to both technical and non-technical readers.\n\nThe articles are structured to be both educational and engaging, with a clear introduction, well-organized sections, and a conclusion that summarizes the key points. Code examples, diagrams, and illustrations are used where appropriate to enhance understanding.\n\nSome of the most popular articles in the collection include:\n\n1. "The Future of AI: Beyond Machine Learning" - An exploration of emerging AI technologies and their potential impact on various industries.\n\n2. "Clean Code Principles Every Developer Should Know" - A practical guide to writing maintainable and readable code, with examples in multiple programming languages.\n\n3. "Microservices vs. Monoliths: Choosing the Right Architecture" - An in-depth comparison of different architectural approaches, with case studies and decision frameworks.\n\n4. "The Developer\'s Guide to Cybersecurity" - An overview of security best practices for software developers, covering common vulnerabilities and how to prevent them.\n\nThe articles are optimized for search engines, with careful keyword research and on-page SEO techniques applied to ensure maximum visibility.',
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "content",
    //   technologies: ["Content Writing", "SEO", "Research", "Technical Analysis", "WordPress", "Content Strategy"],
    //   demo: "https://blog.example.com",
    // },

    // // Design Projects
    // {
    //   id: "project6",
    //   title: "Brand Identity Package",
    //   description:
    //     "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    //   longDescription:
    //     "This comprehensive brand identity package was created for a tech startup entering the competitive SaaS market. The project began with extensive research into the company's values, target audience, and competitors to ensure the brand identity would be distinctive and aligned with the company's vision.\n\nThe package includes:\n\n1. Logo Design: A modern, versatile logo with variations for different contexts (full color, monochrome, horizontal, vertical, and icon-only versions). The logo symbolizes innovation and reliability through its geometric design and color scheme.\n\n2. Color Palette: A carefully selected color palette with primary, secondary, and accent colors, along with guidelines for their usage in different contexts. The palette includes both digital color codes (HEX, RGB) and print color codes (CMYK, Pantone).\n\n3. Typography System: A selection of typefaces for headings, body text, and UI elements, with detailed guidelines for font sizes, weights, and spacing to ensure consistency across all materials.\n\n4. Brand Guidelines: A comprehensive document detailing how to use all brand elements correctly, including spacing requirements, do's and don'ts, and examples of the brand applied to various materials.\n\n5. Application Examples: Mockups showing the brand applied to business cards, letterheads, social media profiles, website, mobile app, and promotional materials.\n\nThe final brand identity successfully communicates the company's innovative approach while maintaining a professional and trustworthy appearance, helping them stand out in a crowded market.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "design",
    //   technologies: [
    //     "Brand Design",
    //     "Logo Design",
    //     "Typography",
    //     "Color Theory",
    //     "Adobe Illustrator",
    //     "Adobe InDesign",
    //   ],
    //   demo: "https://behance.net/muhamadsami23",
    // },
    // {
    //   id: "project7",
    //   title: "UI/UX Design System",
    //   description:
    //     "A comprehensive design system with reusable components, style guides, and interaction patterns for a mobile application.",
    //   longDescription:
    //     "This UI/UX design system was created for a mobile application to ensure consistency, improve development efficiency, and provide a seamless user experience across the platform. The design system follows atomic design principles, organizing elements from the smallest building blocks to complex components and templates.\n\nThe design system includes:\n\n1. Foundation Elements: Color palette, typography, spacing, grid system, and iconography, all with detailed specifications and usage guidelines.\n\n2. Component Library: A comprehensive library of UI components including buttons, form elements, cards, navigation elements, and more. Each component is documented with variants, states, behavior, and code snippets.\n\n3. Interaction Patterns: Standardized patterns for common interactions such as navigation, form submission, error handling, and loading states, ensuring a consistent user experience throughout the application.\n\n4. Accessibility Guidelines: Detailed guidelines for ensuring all components meet WCAG 2.1 AA standards, including color contrast requirements, keyboard navigation, and screen reader support.\n\n5. Design Tokens: A system of design tokens that can be exported to different platforms, allowing for consistent implementation across web and mobile platforms.\n\nThe entire design system is maintained in Figma, with components organized into a master library that can be shared across multiple projects. The system includes documentation for both designers and developers, bridging the gap between design and implementation.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "design",
    //   technologies: ["UI/UX Design", "Figma", "Interaction Design", "Prototyping", "Design Systems", "Accessibility"],
    //   demo: "https://figma.com/@muhamadsami23",
    // },

    // // Other Projects
    // {
    //   id: "project8",
    //   title: "Data Analysis Dashboard",
    //   description:
    //     "Interactive data visualization dashboard for business analytics with real-time data processing and customizable reports.",
    //   longDescription:
    //     "This data analysis dashboard provides business users with powerful tools to visualize and analyze complex data sets without requiring technical expertise. The dashboard combines real-time data processing with intuitive visualization tools to help users make data-driven decisions quickly.\n\nKey features include:\n\n1. Interactive Visualizations: A variety of chart types (line, bar, pie, scatter, heat maps, etc.) that users can interact with to explore data from different angles. All visualizations support drilling down, filtering, and exporting.\n\n2. Real-time Data Processing: Integration with various data sources to provide up-to-date information, with automatic refreshing and the ability to view historical trends.\n\n3. Customizable Reports: Users can create and save custom reports with specific metrics, visualizations, and filters. These reports can be scheduled for automatic generation and distribution via email.\n\n4. Advanced Analytics: Built-in statistical analysis tools including trend analysis, forecasting, and anomaly detection to help users identify patterns and outliers in their data.\n\n5. Role-based Access Control: Granular permissions system ensuring users only see the data relevant to their role, with administrative tools for managing user access.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   category: "other",
    //   technologies: ["Data Analysis", "Visualization", "Python", "Tableau", "D3.js", "React", "Flask", "Pandas"],
    //   github: "https://github.com/muhamadsami23/data-dashboard",
    //   demo: "https://data-dashboard.example.com",
    // },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "software":
        return <Code className="w-5 h-5" />
      case "content":
        return <FileText className="w-5 h-5" />
      case "design":
        return <Palette className="w-5 h-5" />
      case "other":
        return <Layers className="w-5 h-5" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "software":
        return "from-teal-500 to-emerald-500"
      case "content":
        return "from-blue-500 to-indigo-500"
      case "design":
        return "from-purple-500 to-pink-500"
      case "other":
        return "from-amber-500 to-orange-500"
      default:
        return "from-teal-500 to-teal-500"
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "software":
        return "Software Development"
      case "content":
        return "Content Writing"
      case "design":
        return "Design & Branding"
      case "other":
        return "Other Projects"
      default:
        return category
    }
  }

  // Staggered animation for projects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Handle view details click
  const handleViewDetails = (project: Project, e: React.MouseEvent) => {
    e.preventDefault()
    setSelectedProject(project)
    // Add a class to the body to prevent scrolling
    document.body.classList.add("overflow-hidden")
  }

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedProject(null)
    // Remove the class from the body to allow scrolling again
    document.body.classList.remove("overflow-hidden")
  }

  return (
    <div className="space-y-12" ref={containerRef}>
      {/* Category Filter */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-md opacity-75"></div>
        <div className="relative bg-zinc-900/80 backdrop-blur-sm p-1 rounded-lg flex flex-wrap justify-center gap-2 overflow-hidden">
          <Button
            variant="ghost"
            className={`rounded-md px-5 py-6 transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-teal-500/20 to-teal-500/10 text-teal-300"
                : "hover:bg-zinc-800/50 hover:text-teal-400"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              All Projects
            </span>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-md px-5 py-6 transition-all duration-300 ${
              activeCategory === "software"
                ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/10 text-teal-300"
                : "hover:bg-zinc-800/50 hover:text-teal-400"
            }`}
            onClick={() => setActiveCategory("software")}
          >
            <span className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Software Development
            </span>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-md px-5 py-6 transition-all duration-300 ${
              activeCategory === "content"
                ? "bg-gradient-to-r from-blue-500/20 to-indigo-500/10 text-blue-300"
                : "hover:bg-zinc-800/50 hover:text-teal-400"
            }`}
            onClick={() => setActiveCategory("content")}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Content Writing
            </span>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-md px-5 py-6 transition-all duration-300 ${
              activeCategory === "design"
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/10 text-purple-300"
                : "hover:bg-zinc-800/50 hover:text-teal-400"
            }`}
            onClick={() => setActiveCategory("design")}
          >
            <span className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Design & Branding
            </span>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-md px-5 py-6 transition-all duration-300 ${
              activeCategory === "other"
                ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-300"
                : "hover:bg-zinc-800/50 hover:text-teal-400"
            }`}
            onClick={() => setActiveCategory("other")}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Other Projects
            </span>
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group h-full cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => handleViewDetails(project, e)}
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Background gradient based on category */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                    project.category,
                  )} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Card content */}
                <div className="relative h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 group-hover:border-opacity-0 transition-all duration-500 flex flex-col">
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-2.5 py-1">Featured</Badge>
                    </div>
                  )}

                  {/* Image with overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70 z-10`}
                    ></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category icon overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${getCategoryColor(
                          project.category,
                        )} bg-opacity-20 backdrop-blur-md`}
                      >
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-zinc-800/80 text-gray-300 px-2 py-1 rounded-md backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-zinc-800/80 text-gray-300 px-2 py-1 rounded-md backdrop-blur-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800/50">
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 transition-colors"
                            aria-label={`GitHub repository for ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
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
                            aria-label={`Live demo for ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>

                      <span className="text-xs text-gray-500">{getCategoryName(project.category)}</span>
                    </div>
                  </div>

                  {/* Hover overlay with view details button */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  >
                    <Button
                      className="pointer-events-auto bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={(e) => handleViewDetails(project, e)}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-800"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-zinc-800/80 flex items-center justify-center">
              {getCategoryIcon(activeCategory)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">No projects available in the {getCategoryName(activeCategory)} category.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" onClick={handleCloseModal}></div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 text-gray-400 hover:text-white hover:bg-zinc-700/80 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(selectedProject.category)} opacity-20`}
                  ></div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {getCategoryIcon(selectedProject.category)}
                    <span className="text-sm font-medium">{getCategoryName(selectedProject.category)}</span>
                  </div>

                  {/* Featured badge */}
                  {selectedProject.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-2.5 py-1">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-4">{selectedProject.title}</h2>

                  <div className="prose prose-invert prose-sm max-w-none mb-6 flex-grow overflow-auto">
                    {selectedProject.longDescription?.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mb-4 text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                        GitHub Repository
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
