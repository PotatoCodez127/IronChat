import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChatbotList } from "@/components/dashboard/chatbot-list"
import { Plus } from "lucide-react"

export default function ChatbotsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Chatbots</h1>
          <p className="text-foreground/60">Manage and monitor your AI chatbots</p>
        </div>
        <Button asChild className="button-primary">
          <Link href="/dashboard/chatbots/create">
            <Plus className="h-4 w-4 mr-2" />
            Create New Chatbot
          </Link>
        </Button>
      </div>

      <ChatbotList />
    </div>
  )
}
