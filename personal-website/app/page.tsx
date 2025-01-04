import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Justin Wang
        </h1>
        <h2 className="text-3xl text-gray-300 h-[60px]">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Cloud Engineering Intern',
              2000,
              'Data Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
      </div>
      
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-300">
        Passionate about automation, data analysis, and cloud technologies. 
        Always eager to tackle complex problems and create innovative solutions.
      </p>
      
      <div className="flex space-x-4 mb-8">
        <Button asChild variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/about">About Me</Link>
        </Button>
        <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          <Link href="/projects">My Projects</Link>
        </Button>
      </div>
      
      <div className="flex space-x-6">
        <a href="https://github.com/yimango" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:yi.wang2@uwaterloo.ca" className="text-gray-400 hover:text-white transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
  )
}

