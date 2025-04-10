import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, ExternalLink, MessageSquare, Users, Clock, CheckCircle, Code } from "lucide-react"
import { ConversationList } from "@/components/dashboard/conversation-list"
import { LineChart } from "@/components/dashboard/line-chart"

export default function ChatbotDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the chatbot data based on the ID
  const chatbot = {
    id: params.id,
    name: "Customer Support Bot",
    status: "active",
    conversations: 12453,
    responseTime: "1.2s",
    lastUpdated: "2 days ago",
    description: "Handles customer inquiries about products, orders, and returns.",
    category: "Customer Support",
    createdAt: "June 15, 2023",
    resolutionRate: "92%",
    averageRating: "4.7/5",
    knowledgeSources: ["Company FAQ", "Product Documentation", "Return Policy"],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/chatbots">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{chatbot.name}</h1>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={
                  chatbot.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                }
              >
                {chatbot.status}
              </Badge>
              <span className="text-foreground/60">ID: {chatbot.id}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/chatbots/${params.id}/edit`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live
            </a>
          </Button>
          <Button className="button-primary">
            <Code className="h-4 w-4 mr-2" />
            Get Embed Code
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground/60 text-sm font-medium">Total Conversations</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold">{chatbot.conversations.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground/60 text-sm font-medium">Active Users</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold">1,247</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground/60 text-sm font-medium">Avg. Response Time</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold">{chatbot.responseTime}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-foreground/60 text-sm font-medium">Resolution Rate</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold">{chatbot.resolutionRate}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Chatbot Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <dt className="text-foreground/60 font-medium">Description</dt>
                    <dd className="sm:text-right">{chatbot.description}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <dt className="text-foreground/60 font-medium">Category</dt>
                    <dd className="sm:text-right">{chatbot.category}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <dt className="text-foreground/60 font-medium">Created</dt>
                    <dd className="sm:text-right">{chatbot.createdAt}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <dt className="text-foreground/60 font-medium">Last Updated</dt>
                    <dd className="sm:text-right">{chatbot.lastUpdated}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <dt className="text-foreground/60 font-medium">Average Rating</dt>
                    <dd className="sm:text-right">{chatbot.averageRating}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Knowledge Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {chatbot.knowledgeSources.map((source, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                      <span>{source}</span>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Manage Knowledge Sources
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Over Time</CardTitle>
              <CardDescription>Conversations in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>The most recent interactions with your chatbot</CardDescription>
            </CardHeader>
            <CardContent>
              <ConversationList chatbotId={params.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Analytics</CardTitle>
              <CardDescription>Insights into your chatbot's performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Conversations by Day</h3>
                  <LineChart />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Top User Queries</h3>
                  <ul className="space-y-3">
                    {[
                      { query: "How do I track my order?", count: 342 },
                      { query: "What is your return policy?", count: 287 },
                      { query: "Do you ship internationally?", count: 231 },
                      { query: "How long does shipping take?", count: 198 },
                      { query: "Can I change my order?", count: 176 },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between p-3 bg-muted rounded-md">
                        <span>{item.query}</span>
                        <span className="font-medium">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Settings</CardTitle>
              <CardDescription>Configure your chatbot's behavior and appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>To change your chatbot's settings, please visit the edit page:</p>
                <Button asChild>
                  <Link href={`/dashboard/chatbots/${params.id}/edit`}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Chatbot
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
