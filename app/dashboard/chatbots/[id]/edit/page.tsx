"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, Plus, Trash2, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function EditChatbotPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [knowledgeSources, setKnowledgeSources] = useState([
    { id: 1, name: "Company FAQ", type: "document", status: "uploaded" },
    { id: 2, name: "Product Documentation", type: "document", status: "uploaded" },
    { id: 3, name: "Return Policy", type: "document", status: "uploaded" },
  ])

  // In a real app, you would fetch the chatbot data based on the ID
  const chatbot = {
    id: params.id,
    name: "Customer Support Bot",
    description: "Handles customer inquiries about products, orders, and returns.",
    category: "customer-support",
    language: "en",
    status: "active",
    welcomeMessage: "Hello! How can I help you today? I'm here to answer your questions.",
    primaryColor: "#0f172a",
    position: "right",
    showBranding: true,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push(`/dashboard/chatbots/${params.id}`)
    }, 1500)
  }

  const addKnowledgeSource = () => {
    const newId = knowledgeSources.length + 1
    setKnowledgeSources([
      ...knowledgeSources,
      { id: newId, name: `Source ${newId}`, type: "document", status: "pending" },
    ])
  }

  const removeKnowledgeSource = (id: number) => {
    setKnowledgeSources(knowledgeSources.filter((source) => source.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/chatbots/${params.id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Edit Chatbot</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Edit the basic details for your chatbot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Chatbot Name</Label>
                  <Input id="name" defaultValue={chatbot.name} required />
                  <p className="text-sm text-foreground/60">This name will be visible to your team only</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue={chatbot.description} rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue={chatbot.category}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="product-info">Product Information</SelectItem>
                      <SelectItem value="faq">FAQ</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Primary Language</Label>
                  <Select defaultValue={chatbot.language}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="active">Active Status</Label>
                    <p className="text-sm text-foreground/60">Enable to make this chatbot available</p>
                  </div>
                  <Switch id="active" defaultChecked={chatbot.status === "active"} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.push(`/dashboard/chatbots/${params.id}`)}>
                  Cancel
                </Button>
                <Button type="button" onClick={() => setActiveTab("knowledge")}>
                  Next: Knowledge Base
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>Manage sources of knowledge for your chatbot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Knowledge Sources</Label>

                  <div className="space-y-3">
                    {knowledgeSources.map((source) => (
                      <div
                        key={source.id}
                        className="flex items-center justify-between p-3 border border-border rounded-md"
                      >
                        <div>
                          <p className="font-medium">{source.name}</p>
                          <p className="text-sm text-foreground/60">{source.type}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {source.status}
                          </span>
                          <Button variant="ghost" size="icon" onClick={() => removeKnowledgeSource(source.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={addKnowledgeSource}
                  >
                    <Plus className="h-4 w-4" />
                    Add Knowledge Source
                  </Button>
                </div>

                <div className="p-4 border border-dashed border-border rounded-md bg-muted/50 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="h-8 w-8 text-foreground/60" />
                    <div className="space-y-1">
                      <p className="font-medium">Upload Files</p>
                      <p className="text-sm text-foreground/60">Drag and drop files or click to browse</p>
                    </div>
                    <Button type="button" variant="outline" size="sm" className="mt-2">
                      Browse Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input id="website" placeholder="https://your-website.com" />
                  <p className="text-sm text-foreground/60">Your chatbot will crawl this website for information</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => setActiveTab("basic")}>
                  Back
                </Button>
                <Button type="button" onClick={() => setActiveTab("appearance")}>
                  Next: Appearance
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how your chatbot looks to your users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="chatbotName">Chatbot Display Name</Label>
                  <Input id="chatbotName" defaultValue={chatbot.name} />
                  <p className="text-sm text-foreground/60">This name will be visible to your users</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="welcomeMessage">Welcome Message</Label>
                  <Textarea id="welcomeMessage" defaultValue={chatbot.welcomeMessage} rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      defaultValue={chatbot.primaryColor}
                      className="w-12 h-10 p-1"
                    />
                    <Input defaultValue={chatbot.primaryColor} className="flex-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Chat Window Position</Label>
                  <Select defaultValue={chatbot.position}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Bottom Left</SelectItem>
                      <SelectItem value="right">Bottom Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="branding">Show IRONCHAT Branding</Label>
                    <p className="text-sm text-foreground/60">Display "Powered by IRONCHAT" in the chatbot</p>
                  </div>
                  <Switch id="branding" defaultChecked={chatbot.showBranding} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => setActiveTab("knowledge")}>
                  Back
                </Button>
                <Button type="submit" className="button-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Tabs>

      <Card className="border-destructive/50">
        <CardHeader className="text-destructive">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <CardTitle>Danger Zone</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Deleting this chatbot will permanently remove all of its data, including conversations and analytics. This
            action cannot be undone.
          </p>
          <Button variant="destructive">Delete Chatbot</Button>
        </CardContent>
      </Card>
    </div>
  )
}
