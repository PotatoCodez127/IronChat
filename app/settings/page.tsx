"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Shield, CreditCard, LogOut } from "lucide-react"
// Temporarily mock auth functionality
import { useAuth } from "@/contexts/auth-context"
// const useAuth = () => ({
//   logout: () => console.log("Logout clicked")
// })

export default function SettingsPage() {
  const router = useRouter()
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState("profile")

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="container mx-auto py-8 px-4 mt-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <Button variant="outline" className="text-destructive hover:text-destructive" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="profile" className="text-center">
              <User className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-center">
              <Bell className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="text-center">
              <Shield className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="text-center">
              <CreditCard className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Acme Inc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
                  </div>

                  <Button type="button" className="button-primary">
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-foreground/70">Receive email updates about your account</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">New Conversations</p>
                      <p className="text-sm text-foreground/70">Get notified when a new conversation starts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Weekly Reports</p>
                      <p className="text-sm text-foreground/70">Receive weekly performance reports</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-foreground/70">Receive news about new features and offers</p>
                    </div>
                    <Switch />
                  </div>

                  <Button type="button" className="button-primary">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>

                  <Button type="button" className="button-primary">
                    Update Password
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-foreground/70">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Set Up</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="font-medium text-lg">Growth Plan</p>
                      <p className="text-sm text-foreground/70">$79/month, billed monthly</p>
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      Cancel Plan
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm">Chatbots</p>
                      <p className="text-sm font-medium">3 of 5</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm">Monthly Conversations</p>
                      <p className="text-sm font-medium">12,547 of 25,000</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-blue-500 rounded"></div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-foreground/70">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
