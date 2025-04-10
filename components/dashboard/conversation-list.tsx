"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Conversation {
  id: string
  title: string
  description: string
}

interface ConversationListProps {
  chatbotId: string
}

const conversations: Conversation[] = [
  {
    id: "1",
    title: "Customer Inquiry - Order Status",
    description: "Inquiry about order #12345",
  },
  {
    id: "2",
    title: "Technical Support - Login Issues",
    description: "User unable to login to their account",
  },
  {
    id: "3",
    title: "Product Question - Feature Details",
    description: "Question about a specific product feature",
  },
]

const handleViewConversation = (conversationId: string) => {
  // In a real app, this would navigate to a conversation detail page
  console.log(`Viewing conversation: ${conversationId}`)
  // For demo purposes, we'll just show an alert
  alert(`Viewing conversation: ${conversationId}`)
}

export const ConversationList: React.FC<ConversationListProps> = ({ chatbotId }) => {
  return (
    <div>
      {conversations.map((conversation) => (
        <Card key={conversation.id}>
          <CardHeader>
            <CardTitle>{conversation.title}</CardTitle>
            <CardDescription>{conversation.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>Conversation ID: {conversation.id}</div>
            <Button size="sm" variant="outline" onClick={() => handleViewConversation(conversation.id)}>
              View Conversation
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
