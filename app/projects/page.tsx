import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"
import { Github } from 'lucide-react'

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center text-readable">Projects</h1>
        
        <AnimatedCard className="mb-8 card-bg" delay={100}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">Quantitative Research - Commodity Storage Optimization</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/quantitative-research" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> Python, Financial Modeling, Multi-linear Regression, Logistic Regression</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Reduced commodity storage costs by 8% through financial modeling with Python</li>
              <li>Boosted projection accuracy by 6% by applying multi-linear regression to forecast seasonal trends</li>
              <li>Engineered an advanced logistic regression model to evaluate credit risk</li>
              <li>Developed comprehensive data analysis pipelines for commodity market insights</li>
            </ul>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-8 card-bg" delay={200}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">BeatPace</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/beatpace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> Next.js, Go, Gin, MySQL, Spotify API, JWT, OAuth 2.0</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Built a rhythm-based Spotify web application that generates playlists customized to running pace</li>
              <li>Implemented OAuth 2.0 authentication with Spotify and JWT session management</li>
              <li>Developed cadence-aware playlist generation using Spotify&apos;s recommendation API</li>
              <li>Created a modern UI with Next.js App Router, Tailwind CSS, and Radix UI</li>
            </ul>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-8 card-bg" delay={300}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">Sentiment Analysis AI</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/sentiment-analysis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> Python, PyTorch, NumPy, CUDA, Transformers, LSTM</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Created NLP for sentiment analysis of 10 GB of X (Twitter) posts, leveraging CNN and transformer architectures achieving 92% accuracy</li>
              <li>Leveraged CUDA to dramatically accelerate the training of deep learning models, cutting training time by 100×</li>
              <li>Implemented custom data preprocessing pipelines, improving model accuracy by 20%</li>
            </ul>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-8 card-bg" delay={400}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">Caustics Wave Simulation</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/caustics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> C++, OpenGL, GLFW, GLM, Ray Tracing, Wave Physics</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed a real-time 3D wave simulation with realistic caustics rendering using OpenGL</li>
              <li>Implemented ray tracing algorithms for accurate light refraction and caustic pattern generation</li>
              <li>Created interactive wave disturbance system with physics-based wave propagation</li>
              <li>Built custom shaders for realistic water surface rendering and lighting effects</li>
            </ul>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-8 card-bg" delay={500}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">Wackypedia</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/wackypedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> Python, Selenium, React, Flask, Firebase</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Produced a full stack application using Python, Selenium, Flask, React, and Firebase</li>
              <li>Streamlined the collection of over 2,000 low-traffic Wikipedia sites using a Selenium web scraper</li>
              <li>Capability to scrape more than 3,000 unique sites per hour, significantly improving data acquisition efficiency</li>
            </ul>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="card-bg" delay={600}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-readable">Algorithm Solutions</CardTitle>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/yimango/leetcode-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Technologies:</strong> Python, Data Structures, Algorithms</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Collection of optimized solutions to algorithmic problems including dynamic programming, graph algorithms, and data structures</li>
              <li>Implemented efficient solutions for problems involving union-find, longest substring, and garbage collection algorithms</li>
              <li>Maintained high code quality with clear documentation and optimal time/space complexity</li>
            </ul>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}

