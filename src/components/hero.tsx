import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="relative w-48 h-48 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 rounded-md transform rotate-3"></div>
        <div className="absolute inset-0 bg-black rounded-md overflow-hidden transform -rotate-3 border-2 border-teal-500/50">
          <img src="/placeholder.svg?height=200&width=200" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            John Doe
          </h1>
          <h2 className="text-xl text-gray-400">Software Engineer</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
            Full Stack
          </Badge>
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
            Systems Programming
          </Badge>
          <Badge variant="secondary" className="bg-green-500/20 text-green-300">
            Embedded Systems
          </Badge>
        </div>

        <p className="text-gray-300 max-w-2xl">
          I'm a passionate software engineer with expertise in both high-level and low-level programming. With a strong
          foundation in systems programming and a knack for creating elegant user interfaces, I bridge the gap between
          hardware and software to build comprehensive solutions. My background spans embedded systems, database design,
          and web development, allowing me to approach problems from multiple perspectives.
        </p>
      </div>
    </section>
  )
}

