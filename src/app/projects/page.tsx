import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsGallery from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Projects | Muhammad Sami",
  description: "Explore all projects by Muhammad Sami across different categories",
  keywords: "projects, portfolio, software development, content writing, brand presentations",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-zinc-950 text-gray-200">
      <Navbar />
      <div className="pt-24 pb-16 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-teal-900/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-teal-400">Projects</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore my complete portfolio of projects across different categories, from software development to
              content writing and brand presentations.
            </p>
          </div>

          <ProjectsGallery />
        </div>
      </div>
      <Footer />
    </main>
  )
}
