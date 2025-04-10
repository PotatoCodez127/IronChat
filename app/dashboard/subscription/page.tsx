import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Download, ExternalLink } from "lucide-react"

export default function SubscriptionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Subscription</h1>
        <p className="text-foreground/60">Manage your subscription and billing information</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>Your subscription details and usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Growth Plan</h3>
                <p className="text-foreground/60">$79/month, billed monthly</p>
              </div>
              <Badge className="bg-primary/10 text-primary">Active</Badge>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Chatbots</span>
                  <span className="text-sm font-medium">3 of 5</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Monthly Conversations</span>
                  <span className="text-sm font-medium">12,547 of 25,000</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-foreground/60 mb-4">
                Your plan renews on <span className="font-medium">August 15, 2023</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Change Plan
                </Button>
                <Button variant="outline" className="flex-1 text-destructive hover:text-destructive">
                  Cancel Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Manage your payment details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-blue-500 rounded"></div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-foreground/60">Expires 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-medium mb-3">Billing History</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">July 15, 2023</p>
                    <p className="text-sm text-foreground/60">Growth Plan - Monthly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$79.00</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">June 15, 2023</p>
                    <p className="text-sm text-foreground/60">Growth Plan - Monthly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$79.00</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">May 15, 2023</p>
                    <p className="text-sm text-foreground/60">Growth Plan - Monthly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">$79.00</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plan Features</CardTitle>
          <CardDescription>Features included in your current plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-medium">Chatbots</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Up to 5 chatbots</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Multi-channel deployment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Analytics</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>User behavior insights</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Support</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Webhooks integration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/pricing">
                Compare All Plans
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
