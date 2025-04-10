"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ExternalLink, Edit, Trash2 } from "lucide-react"

// Sample chatbot data
const chatbots = [
  {
    id: 1,
    name: "Customer Support Bot",
    status: "active",
    conversations: 12453,
    responseTime: "1.2s",
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    name: "Product Recommendation Bot",
    status: "active",
    conversations: 8721,
    responseTime: "1.5s",
    lastUpdated: "5 days ago",
  },
  {
    id: 3,
    name: "Order Tracking Assistant",
    status: "active",
    conversations: 3254,
    responseTime: "0.9s",
    lastUpdated: "1 day ago",
  },
  {
    id: 4,
    name: "FAQ Bot",
    status: "inactive",
    conversations: 0,
    responseTime: "0s",
    lastUpdated: "2 weeks ago",
  },
  {
    id: 5,
    name: "Lead Generation Bot",
    status: "active",
    conversations: 2104,
    responseTime: "1.1s",
    lastUpdated: "3 days ago",
  },
]

interface ChatbotListProps {
  limit?: number
}

export function ChatbotList({ limit }: ChatbotListProps) {
  const [displayedChatbots, setDisplayedChatbots] = useState(limit ? chatbots.slice(0, limit) : chatbots)

  const handleDelete = (id: number) => {
    setDisplayedChatbots(displayedChatbots.filter((bot) => bot.id !== id))
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Conversations</TableHead>
            <TableHead>Avg. Response Time</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedChatbots.map((bot) => (
            <TableRow key={bot.id}>
              <TableCell className="font-medium">{bot.name}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    bot.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                  }
                >
                  {bot.status}
                </Badge>
              </TableCell>
              <TableCell>{bot.conversations.toLocaleString()}</TableCell>
              <TableCell>{bot.responseTime}</TableCell>
              <TableCell>{bot.lastUpdated}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/chatbots/${bot.id}`} className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/chatbots/${bot.id}/edit`} className="flex items-center">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(bot.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
