"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

// Sample conversation for the animation
const conversation = [
  { role: "bot", message: "Hello! How can I help you today?" },
  { role: "user", message: "I'm having trouble with my order." },
  { role: "bot", message: "I'm sorry to hear that. Can you provide your order number?" },
  { role: "user", message: "Sure, it's #12345." },
  { role: "bot", message: "Thank you. I can see your order was shipped yesterday. It should arrive by tomorrow." },
  { role: "user", message: "Great, thanks for checking!" },
  { role: "bot", message: "You're welcome! Is there anything else I can help you with?" },
]

export function ChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState<typeof conversation>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [visibleMessages])

  useEffect(() => {
    if (currentIndex < conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, conversation[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, 1500) // Show a new message every 1.5 seconds

      return () => clearTimeout(timer)
    } else {
      // Reset the animation after a pause
      const resetTimer = setTimeout(() => {
        setVisibleMessages([])
        setCurrentIndex(0)
      }, 3000) // Wait 3 seconds before resetting

      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex])

  return (
    <Card className="w-full max-w-md p-4 h-[400px] overflow-hidden flex flex-col">
      <div className="bg-primary/10 rounded-t-lg p-3 border-b border-border">
        <h3 className="font-medium">Customer Support Chat</h3>
      </div>
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {visibleMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted text-foreground mr-auto"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        {/* Add a dummy div at the bottom to ensure scrolling works properly */}
        <div className="h-1" />
      </div>
      <div className="border-t border-border p-3 mt-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-sm"
            disabled
          />
          <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">Send</button>
        </div>
      </div>
    </Card>
  )
}
