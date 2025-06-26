import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center text-readable">Contact Me</h1>
        <Card className="card-bg">
          <CardHeader>
            <CardTitle className="text-white text-readable">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-200 text-readable-light">
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>647-806-2338</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <a href="mailto:yi.wang2@uwaterloo.ca" className="hover:underline text-blue-300 hover:text-blue-200">yi.wang2@uwaterloo.ca</a>
            </div>
            <div className="flex items-center">
              <Github className="mr-2" />
              <a href="https://github.com/yimango" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 hover:text-blue-200">github.com/yimango</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2" />
              <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 hover:text-blue-200">linkedin.com/in/yi-wang9</a>
            </div>
            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

