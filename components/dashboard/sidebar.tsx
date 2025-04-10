"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Settings,
  CreditCard,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Chatbots", href: "/dashboard/chatbots", icon: MessageSquare },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help & Support", href: "/dashboard/support", icon: HelpCircle },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-card border-r border-border h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[280px]",
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link href="/" className={cn("flex items-center gap-2", collapsed && "justify-center")}>
          {!collapsed && <span className="text-xl font-bold">IRONCHAT</span>}
          {collapsed && <span className="text-xl font-bold">IC</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="py-4">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-base rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted",
                collapsed && "justify-center px-2",
              )}
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed && "h-6 w-6")} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div
          className={cn(
            "bg-primary/10 text-primary rounded-lg p-4",
            collapsed ? "text-center" : "flex items-start gap-3",
          )}
        >
          {!collapsed && (
            <>
              <div className="flex-shrink-0 mt-1">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Growth Plan</p>
                <p className="text-sm text-primary/80">
                  Your plan renews on <span className="font-medium">Aug 15, 2023</span>
                </p>
              </div>
            </>
          )}
          {collapsed && <CreditCard className="h-5 w-5 mx-auto" />}
        </div>
      </div>
    </div>
  )
}
