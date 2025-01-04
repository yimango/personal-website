import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
      <AnimatedCard className="mb-6" delay={100}>
        <CardHeader>
          <CardTitle className="text-white">Sentiment Analysis AI</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>Technologies:</strong> Python, PyTorch, NumPy, CUDA</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Created NLP for sentiment analysis of 10 GB of X (Twitter) posts, leveraging CNN and transformer architectures achieving 92% accuracy</li>
            <li>Leveraged CUDA to dramatically accelerate the training of deep learning models, cutting training time by 100×</li>
            <li>Implemented custom data preprocessing pipelines, improving model accuracy by 20%</li>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard delay={200}>
        <CardHeader>
          <CardTitle className="text-white">Wackypedia</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>Technologies:</strong> Python, Selenium, React, Flask, Firebase</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Produced a full stack application using Python, Selenium, Flask, React, and Firebase</li>
            <li>Streamlined the collection of over 2,000 low-traffic Wikipedia sites using a Selenium web scraper</li>
            <li>Capability to scrape more than 3,000 unique sites per hour, significantly improving data acquisition efficiency</li>
          </ul>
        </CardContent>
      </AnimatedCard>
    </div>
  )
}

