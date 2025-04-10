import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart } from "@/components/dashboard/bar-chart"
import { LineChart } from "@/components/dashboard/line-chart"
import { StatCard } from "@/components/dashboard/stat-card"
import { MessageSquare, Users, Clock, CheckCircle } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Analytics</h1>
        <p className="text-foreground/60">Insights and statistics about your chatbots</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
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
              icon={<Clock className="h-5 w-5" />}
            />
            <StatCard
              title="Resolution Rate"
              value="92%"
              change="+3%"
              trend="up"
              description="vs. previous month"
              icon={<CheckCircle className="h-5 w-5" />}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Conversations Over Time</CardTitle>
                <CardDescription>Daily conversations over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Topics</CardTitle>
                <CardDescription>Most discussed topics this month</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Chatbot Performance</CardTitle>
              <CardDescription>Comparison of your chatbots' performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="font-medium">Customer Support Bot</span>
                    </div>
                    <span>12,453 conversations</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary/80"></div>
                      <span className="font-medium">Product Recommendation Bot</span>
                    </div>
                    <span>8,721 conversations</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div className="h-full bg-primary/80 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary/60"></div>
                      <span className="font-medium">Order Tracking Assistant</span>
                    </div>
                    <span>3,254 conversations</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div className="h-full bg-primary/60 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary/40"></div>
                      <span className="font-medium">Lead Generation Bot</span>
                    </div>
                    <span>2,104 conversations</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div className="h-full bg-primary/40 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Volume</CardTitle>
              <CardDescription>Daily conversations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>Active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
              <CardDescription>Average response time over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
