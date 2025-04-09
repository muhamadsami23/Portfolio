import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ProjectsGallery from "@/components/project-gallery"


export const metadata: Metadata = {
  title: "Muhammad Sami",
  description: "Portfolio showcasing my skills, projects, and professional experience",
}

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-zinc-950 text-gray-200">
      <Navbar />
      <div className="flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

