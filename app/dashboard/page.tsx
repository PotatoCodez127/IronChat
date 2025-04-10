import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/dashboard/stat-card"
import { BarChart } from "@/components/dashboard/bar-chart"
import { LineChart } from "@/components/dashboard/line-chart"
import { ChatbotList } from "@/components/dashboard/chatbot-list"
import { ArrowRight, Users, MessageSquare, BarChart3, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-foreground/60">Welcome back, John! Here's an overview of your chatbots.</p>
        </div>
        <Button asChild className="button-primary">
          <Link href="/dashboard/chatbots/create">Create New Chatbot</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Conversations"
          value="24,532"
          change="+12%"
          trend="up"
          description="vs. previous month"
          icon={<MessageSquare className="h-5 w-5" />}
        />
        <StatCard
          title="Active Users"
          value="3,642"
          change="+8%"
          trend="up"
          description="vs. previous month"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="Avg. Response Time"
          value="1.2s"
          change="-0.3s"
          trend="up"
          description="vs. previous month"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard
          title="Resolution Rate"
          value="92%"
          change="+3%"
          trend="up"
          description="vs. previous month"
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Conversations</CardTitle>
              <CardDescription>Daily conversations over the last 30 days</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Popular Topics</CardTitle>
              <CardDescription>Most discussed topics this month</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Your Chatbots</CardTitle>
            <CardDescription>Manage and monitor your active chatbots</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/chatbots" className="flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <ChatbotList limit={3} />
        </CardContent>
      </Card>
    </div>
  )
}
