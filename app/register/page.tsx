import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Register | Chatbot Dashboard",
  description: "Create a new chatbot dashboard account",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 mt-8">
      <Card className="w-full max-w-md shadow-lg border-border bg-card">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold">Create an account</CardTitle>
          <CardDescription className="text-base md:text-lg text-foreground/70">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server"
              // In a real app, you would create the account here
              // For demo purposes, we'll just redirect to the pricing page
              redirect("/pricing")
            }}
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-background border-input text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  required
                  className="bg-background border-input text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Input id="password" type="password" required className="bg-background border-input text-foreground" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-base">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="bg-background border-input text-foreground"
                />
              </div>
              <Button type="submit" className="w-full button-primary text-lg py-6">
                Create account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-base">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
