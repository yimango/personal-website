import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SkillBadge } from "@/components/skill-badge"
import { AnimatedCard } from "@/components/animated-card"

export default function About() {
  const programmingLanguages = ['Python', 'R', 'SQL', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Bash'];
  const frameworksLibraries = ['PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'React.js', 'Node.js', 'Flask', 'Selenium'];
  const devOpsTools = ['Git', 'Kubernetes', 'AKS', 'Terraform', 'Jenkins', 'Chef', 'Artifactory'];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">About Me</h1>

      <AnimatedCard className="mb-6" delay={100}>
        <CardHeader>
          <CardTitle className="text-white">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-gray-200">University of Waterloo</p>
          <p className="text-gray-200">Bachelor of Mathematics (September 2022 – May 2026)</p>
          <p className="mt-2 text-gray-200">Double major in Statistics and Combinatorics & Optimization</p>
          <p className="mt-2 font-semibold text-gray-200">Relevant Coursework:</p>
          <p className="text-gray-200">Applied Linear Models, Stochastic Processes, Computational Statistics, Linear Optimization</p>
        </CardContent>
      </AnimatedCard>

      <AnimatedCard className="mb-6" delay={200}>
        <CardHeader>
          <CardTitle className="text-white">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="font-semibold text-gray-200 mb-2">Programming Languages:</p>
            <div>
              {programmingLanguages.map((lang) => (
                <SkillBadge key={lang} skill={lang} />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-200 mb-2">Frameworks & Libraries:</p>
            <div>
              {frameworksLibraries.map((framework) => (
                <SkillBadge key={framework} skill={framework} />
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-200 mb-2">DevOps Tools:</p>
            <div>
              {devOpsTools.map((tool) => (
                <SkillBadge key={tool} skill={tool} />
              ))}
            </div>
          </div>
        </CardContent>
      </AnimatedCard>
    </div>
  )
}

