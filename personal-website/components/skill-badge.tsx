import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="mr-2 mb-2 bg-gray-700 text-gray-200 hover:bg-gray-600">
      {skill}
    </Badge>
  )
}

