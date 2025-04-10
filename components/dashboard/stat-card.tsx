import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  description: string
  icon: React.ReactNode
}

export function StatCard({ title, value, change, trend, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-foreground/60 text-sm font-medium">{title}</span>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center gap-1 text-sm">
            <span
              className={
                trend === "up"
                  ? "text-green-500 flex items-center"
                  : trend === "down"
                    ? "text-red-500 flex items-center"
                    : "text-foreground/60"
              }
            >
              {trend === "up" && <ArrowUp className="h-3 w-3" />}
              {trend === "down" && <ArrowDown className="h-3 w-3" />}
              {change}
            </span>
            <span className="text-foreground/60">{description}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
