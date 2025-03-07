"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  type: "web" | "systems" | "embedded"
  details?: {
    overview: string
    challenges: string
    technologies: string[]
    codeSnippet?: string
  }
}

export default function ProjectGallery() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Real-time Data Visualization Dashboard",
      description:
        "A responsive web application for visualizing complex data sets with interactive charts and filters.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      github: "https://github.com/username/project1",
      demo: "https://project1.example.com",
      type: "web",
      details: {
        overview:
          "This dashboard provides real-time visualization of complex data sets, allowing users to interact with and analyze information through customizable charts and filters.",
        challenges:
          "Implementing efficient data processing for large datasets while maintaining responsive UI interactions was a significant challenge.",
        technologies: ["React", "TypeScript", "D3.js", "Node.js", "Express", "MongoDB"],
        codeSnippet: `// Data processing function
function processTimeSeriesData(rawData) {
  return rawData.map(point => ({
    timestamp: new Date(point.time),
    value: normalizeValue(point.value),
    category: point.category
  }));
}`,
      },
    },
    {
      id: 2,
      title: "Memory-Efficient Data Structure Library",
      description: "A C++ library implementing optimized data structures for memory-constrained environments.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["C++", "Data Structures", "Algorithms"],
      github: "https://github.com/username/project2",
      type: "systems",
      details: {
        overview:
          "This library provides memory-efficient implementations of common data structures optimized for performance in resource-constrained environments.",
        challenges:
          "Balancing memory efficiency with performance while maintaining a clean API was the primary challenge.",
        technologies: ["C++", "CMake", "GoogleTest"],
        codeSnippet: `// Compact binary tree implementation
template <typename T>
class CompactBinaryTree {
private:
    std::vector<T> data;
    size_t size;
    
public:
    void insert(const T& value) {
        // Implementation details
    }
};`,
      },
    },
    {
      id: 3,
      title: "Smart Home Automation Controller",
      description: "An Arduino-based system for controlling and monitoring home devices with a mobile interface.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Arduino", "C", "IoT", "Mobile App"],
      github: "https://github.com/username/project3",
      type: "embedded",
      details: {
        overview:
          "This project combines hardware and software to create a comprehensive home automation solution that can be controlled via a mobile app.",
        challenges:
          "Ensuring reliable communication between the Arduino controller and various home devices while maintaining low power consumption.",
        technologies: ["Arduino", "C", "Bluetooth LE", "React Native"],
        codeSnippet: `// Sensor reading function
void readSensors() {
  temperature = dht.readTemperature();
  humidity = dht.readHumidity();
  lightLevel = analogRead(LIGHT_SENSOR_PIN);
  
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
  }
}`,
      },
    },
    {
      id: 4,
      title: "SQL Query Optimizer",
      description: "A tool that analyzes and optimizes SQL queries for improved database performance.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["SQL", "Python", "Database"],
      github: "https://github.com/username/project4",
      type: "systems",
      details: {
        overview:
          "This tool analyzes SQL queries and suggests optimizations to improve performance based on database structure and query patterns.",
        challenges:
          "Developing accurate heuristics for query optimization across different database engines and schemas.",
        technologies: ["Python", "SQLAlchemy", "PostgreSQL", "MySQL"],
        codeSnippet: `# Query analysis function
def analyze_query(query_string):
    parsed = parse_sql(query_string)
    joins = identify_joins(parsed)
    indexes = recommend_indexes(joins, schema)
    return {
        'original': query_string,
        'optimized': rewrite_query(parsed),
        'recommended_indexes': indexes
    }`,
      },
    },
  ])

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Project Gallery</h2>

      <div className="flex justify-center mb-6">
        <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setFilter}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="systems">Systems</TabsTrigger>
            <TabsTrigger value="embedded">Embedded</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-colors"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedProject(project)}>
                View Details
              </Button>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-zinc-900 border-zinc-800">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-gray-400">{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-md"
                />

                <div className="mt-4">
                  <h4 className="font-medium text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details?.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub Repo
                      </Button>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-blue-400 mb-2">Overview</h4>
                <p className="text-gray-300 mb-4">{selectedProject.details?.overview}</p>

                <h4 className="font-medium text-blue-400 mb-2">Challenges</h4>
                <p className="text-gray-300 mb-4">{selectedProject.details?.challenges}</p>

                {selectedProject.details?.codeSnippet && (
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code Snippet
                    </h4>
                    <pre className="bg-black/50 p-3 rounded-md text-xs overflow-x-auto">
                      <code className="text-gray-300">{selectedProject.details.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

