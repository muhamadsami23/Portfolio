// import type { Metadata } from "next"
// import Navbar from "@/components/navbar"
// import HeroSection from "@/components/hero-section"
// import AboutSection from "@/components/about-section"
// import SkillsSection from "@/components/skills-section"
// import ExperienceSection from "@/components/experience-section"
// import ProjectsSection from "@/components/projects-section"
// import ServicesSection from "@/components/services-section"
// import CertificationsSection from "@/components/certifications-section"
// import ContactSection from "@/components/contact-section"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Muhammad Sami",
//   description: "Portfolio showcasing my skills, projects, and professional experience",
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-zinc-950 text-gray-200">
//       <Navbar />
//       <HeroSection />
//       <AboutSection />
//       <SkillsSection />
//       <ExperienceSection />
//       <ProjectsSection />
//       <ServicesSection />
//       <CertificationsSection />
//       <ContactSection />
//       <Footer />
//     </main>
//   )
// }
import type { Metadata } from "next"
import Script from "next/script"

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
  title: "Muhammad Sami",
  description: "Portfolio showcasing my skills, projects, and professional experience.",
  keywords: "Muhammad Sami, portfolio, web developer, software engineer, projects, experience, services, skills",
  openGraph: {
    title: "Muhammad Sami",
    description: "Portfolio showcasing my skills, projects, and professional experience.",
    url: "https://your-portfolio-url.com",
    siteName: "Muhammad Sami Portfolio",
    type: "website",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sami Portfolio",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-gray-200">
      {/* Google Tag Manager - Insert GTM ID */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `,
        }}
      />

      {/* Google Tag Manager (noscript fallback for SEO) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
