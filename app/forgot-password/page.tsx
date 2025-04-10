import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Forgot Password | IRONCHAT",
  description: "Reset your password to regain access to your account",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 mt-8">
      <Card className="w-full max-w-md shadow-lg border-border bg-card">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold">Forgot Password</CardTitle>
          <CardDescription className="text-base md:text-lg text-foreground/70">
            Enter your email to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server"
              // In a real app, you would send a password reset email
              // For demo purposes, we'll just redirect to a confirmation page
              // redirect("/password-reset-sent")
            }}
          >
            <div className="space-y-5">
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
              <Button type="submit" className="w-full button-primary text-lg py-6">
                Send Reset Link
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-base">
            Remembered your password?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
