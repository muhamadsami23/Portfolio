import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "John Doe | Professional Developer Portfolio",
  description: "Portfolio showcasing my skills, projects, and professional experience",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-gray-200">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

