import type React from "react"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

// This is a server component that checks if the user is logged in
// In a real app, you would use a server-side auth check
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mock server-side auth check - in a real app, this would check session/cookies
  const isLoggedIn = true // For demo purposes, we're assuming the user is logged in

  if (!isLoggedIn) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
