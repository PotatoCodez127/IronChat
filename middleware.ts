import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // For demo purposes, we'll use a simple check
  // In a real app, you would check for a valid session/token
  const isLoggedIn = true // Mock authentication

  // Check if the request is for a protected route
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
}
