"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface LanguageSkill {
  name: string
  icon: string
  color: string
  proficiency: number
}

export default function LanguageSkills() {
  const [languages] = useState<LanguageSkill[]>([
    { name: "C", icon: "C", color: "bg-blue-600", proficiency: 90 },
    { name: "C++", icon: "C++", color: "bg-blue-800", proficiency: 85 },
    { name: "Python", icon: "Py", color: "bg-yellow-600", proficiency: 80 },
    { name: "SQL", icon: "SQL", color: "bg-orange-600", proficiency: 75 },
    { name: "Arduino", icon: "Ard", color: "bg-teal-600", proficiency: 85 },
    { name: "JavaScript", icon: "JS", color: "bg-yellow-500", proficiency: 80 },
    { name: "TypeScript", icon: "TS", color: "bg-blue-500", proficiency: 75 },
    { name: "HTML/CSS", icon: "HTML", color: "bg-red-500", proficiency: 85 },
  ])

  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Language Proficiencies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        <TooltipProvider>
          {languages.map((lang) => (
            <Tooltip key={lang.name}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 ${lang.color} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                  >
                    {lang.icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-300">{lang.name}</span>
                  <div className="w-full bg-gray-700 h-1 mt-1 rounded-full overflow-hidden">
                    <div
                      className={`${lang.color} h-full rounded-full`}
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{lang.proficiency}% Proficiency</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  )
}

