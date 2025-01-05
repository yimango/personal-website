import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Me</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-300">
          <div className="flex items-center">
            <Phone className="mr-2" />
            <span>647-806-2338</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:yi.wang2@uwaterloo.ca" className="hover:underline text-blue-400 hover:text-blue-300">yi.wang2@uwaterloo.ca</a>
          </div>
          <div className="flex items-center">
            <Github className="mr-2" />
            <a href="https://github.com/yimango" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400 hover:text-blue-300">github.com/yimango</a>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2" />
            <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400 hover:text-blue-300">linkedin.com/in/yi-wang9</a>
          </div>
          <Button asChild className="mt-4">
            <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Connect on LinkedIn
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

