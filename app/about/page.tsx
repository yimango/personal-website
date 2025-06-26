import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SkillBadge } from "@/components/skill-badge"
import { AnimatedCard } from "@/components/animated-card"

export default function About() {
  const programmingLanguages = ['Python', 'R', 'SQL', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Bash'];
  const frameworksLibraries = ['PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'React.js', 'Node.js', 'Flask', 'Selenium'];
  const devOpsTools = ['Git', 'Kubernetes', 'AKS', 'Terraform', 'Jenkins', 'Chef', 'Artifactory'];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center text-readable">About Me</h1>

        <AnimatedCard className="mb-8 card-bg" delay={100}>
          <CardHeader>
            <CardTitle className="text-white text-readable">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-gray-200 text-readable-light">University of Waterloo</p>
            <p className="text-gray-200 text-readable-light">Bachelor of Mathematics (September 2022 – May 2026)</p>
            <p className="mt-2 text-gray-200 text-readable-light">Double major in Statistics and Combinatorics & Optimization</p>
            <p className="mt-2 font-semibold text-gray-200 text-readable-light">Relevant Coursework:</p>
            <p className="text-gray-200 text-readable-light">Applied Linear Models, Stochastic Processes, Computational Statistics, Linear Optimization</p>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-8 card-bg" delay={200}>
          <CardHeader>
            <CardTitle className="text-white text-readable">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="font-semibold text-gray-200 mb-3 text-readable-light">Programming Languages:</p>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <SkillBadge key={lang} skill={lang} />
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-200 mb-3 text-readable-light">Frameworks & Libraries:</p>
              <div className="flex flex-wrap gap-2">
                {frameworksLibraries.map((framework) => (
                  <SkillBadge key={framework} skill={framework} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-200 mb-3 text-readable-light">DevOps Tools:</p>
              <div className="flex flex-wrap gap-2">
                {devOpsTools.map((tool) => (
                  <SkillBadge key={tool} skill={tool} />
                ))}
              </div>
            </div>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}

