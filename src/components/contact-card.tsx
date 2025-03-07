import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCard() {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Connect With Me</h2>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Button variant="outline" size="icon" className="bg-zinc-800 border-zinc-700 h-10 w-10">
                <Github className="h-5 w-5" />
              </Button>
              <span>github.com/johndoe</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Button variant="outline" size="icon" className="bg-zinc-800 border-zinc-700 h-10 w-10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <span>linkedin.com/in/johndoe</span>
            </a>

            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Button variant="outline" size="icon" className="bg-zinc-800 border-zinc-700 h-10 w-10">
                <Mail className="h-5 w-5" />
              </Button>
              <span>contact@example.com</span>
            </a>

            <div className="flex items-center gap-3 text-gray-300">
              <Button variant="outline" size="icon" className="bg-zinc-800 border-zinc-700 h-10 w-10">
                <MapPin className="h-5 w-5" />
              </Button>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

