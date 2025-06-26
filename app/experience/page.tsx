import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"

export default function Experience() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center text-readable">Work Experience</h1>
        
        <AnimatedCard className="mb-8 card-bg" delay={100}>
          <CardHeader>
            <CardTitle className="text-white text-readable">Cloud Engineering Intern</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>Manulife Bank</strong> | September 2024 - December 2024 | Waterloo, ON</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Automated AKS version upgrades for non-prod and prod clusters, reducing upgrade times by 291 hours monthly</li>
              <li>Led the design and implementation of the workflow architecture, impacting 21 clusters across North America and Asia</li>
              <li>Enabled the transfer of cluster upgrade responsibilities to another team, freeing up 10% of team resources</li>
            </ul>
          </CardContent>
        </AnimatedCard>
        
        <AnimatedCard className="mb-8 card-bg" delay={200}>
          <CardHeader>
            <CardTitle className="text-white text-readable">Software Engineering Intern</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>RBC Capital Markets</strong> | January 2024 – April 2024 | Toronto, ON</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Architected a robust PDF parser using Python, VBA, and PyMuPDF, processing over 200 financial documents daily</li>
              <li>Developed methods to synchronize legal documents with internal databases using Python</li>
            </ul>
          </CardContent>
        </AnimatedCard>
        
        <AnimatedCard className="card-bg" delay={300}>
          <CardHeader>
            <CardTitle className="text-white text-readable">Software Engineering Intern</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-readable-light">
            <p><strong>RBC Capital Markets</strong> | April 2023 – August 2023 | Toronto, ON</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Automated data extraction from company databases using Python, resulting in $10,000 savings in labor costs</li>
              <li>Deployed VBA scripts to optimize trade position tracking, increasing update frequency by 10×</li>
            </ul>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}

