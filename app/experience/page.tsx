import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Work Experience</h1>
      <AnimatedCard className="mb-6" delay={100}>
        <CardHeader>
          <CardTitle className="text-white">Cloud Engineering Intern</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>Manulife Bank</strong> | September 2024 - December 2024 | Waterloo, ON</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Automated AKS version upgrades for non-prod and prod clusters, reducing upgrade times by 291 hours monthly</li>
            <li>Led the design and implementation of the workflow architecture, impacting 21 clusters across North America and Asia</li>
            <li>Enabled the transfer of cluster upgrade responsibilities to another team, freeing up 10% of team resources</li>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard className="mb-6" delay={200}>
        <CardHeader>
          <CardTitle className="text-white">Quantitative Researcher Student</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>Forage</strong> | July 2024 – August 2024 | Remote</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Reduced commodity storage costs by 8% through financial modeling with Python</li>
            <li>Boosted projection accuracy by 6% by applying multi-linear regression to forecast seasonal trends</li>
            <li>Engineered an advanced logistic regression model to evaluate credit risk</li>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard className="mb-6" delay={300}>
        <CardHeader>
          <CardTitle className="text-white">Software Engineering Intern</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>RBC Capital Markets</strong> | January 2024 – April 2024 | Toronto, ON</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Architected a robust PDF parser using Python, VBA, and PyMuPDF, processing over 200 financial documents daily</li>
            <li>Developed methods to synchronize legal documents with internal databases using Python</li>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard delay={400}>
        <CardHeader>
          <CardTitle className="text-white">Software Engineering Intern</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p><strong>RBC Capital Markets</strong> | April 2023 – August 2023 | Toronto, ON</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Automated data extraction from company databases using Python, resulting in $10,000 savings in labor costs</li>
            <li>Deployed VBA scripts to optimize trade position tracking, increasing update frequency by 10×</li>
          </ul>
        </CardContent>
      </AnimatedCard>
    </div>
  )
}

