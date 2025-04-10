"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"

export default function SettingsPage() {
  const router = useRouter()
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState("profile")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
        <p className="text-foreground/60">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Change Avatar
                  </Button>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Acme Inc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" defaultValue="Product Manager" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  defaultValue="Product manager with 5+ years of experience in SaaS and AI products."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="America/Los_Angeles">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                    <SelectItem value="Europe/London">London</SelectItem>
                    <SelectItem value="Europe/Paris">Paris</SelectItem>
                    <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="button" className="button-primary" onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-border">
                    <div>
                      <p className="font-medium">Chatbot Activity</p>
                      <p className="text-sm text-foreground/70">
                        Receive updates about your chatbots' performance and activity
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-border">
                    <div>
                      <p className="font-medium">New Conversations</p>
                      <p className="text-sm text-foreground/70">Get notified when a new conversation starts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-border">
                    <div>
                      <p className="font-medium">Weekly Reports</p>
                      <p className="text-sm text-foreground/70">Receive weekly performance reports</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-foreground/70">Receive news about new features and offers</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">In-App Notifications</h3>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-border">
                    <div>
                      <p className="font-medium">Chatbot Status Changes</p>
                      <p className="text-sm text-foreground/70">Get notified when a chatbot goes online or offline</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-border">
                    <div>
                      <p className="font-medium">Usage Alerts</p>
                      <p className="text-sm text-foreground/70">Receive alerts when approaching usage limits</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">System Announcements</p>
                      <p className="text-sm text-foreground/70">Important announcements about the platform</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Button type="button" className="button-primary" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Preferences"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
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

                <Button type="button" className="button-primary" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Updating..." : "Update Password"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-foreground/70">Protect your account with two-factor authentication</p>
                </div>
                <Button variant="outline">Set Up</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Login Sessions</CardTitle>
              <CardDescription>Manage your active login sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-foreground/70">
                        Chrome on Windows • San Francisco, CA • Started 2 hours ago
                      </p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-foreground/70">iPhone • New York, NY • Started 3 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Log Out of All Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Production API Key</p>
                      <p className="text-sm text-foreground/70">Created on July 15, 2023</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Show
                      </Button>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Development API Key</p>
                      <p className="text-sm text-foreground/70">Created on August 3, 2023</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Show
                      </Button>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Create New API Key
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Webhooks</h3>
                <p className="text-foreground/70 mb-4">
                  Configure webhooks to receive real-time updates about events in your account.
                </p>
                <Button variant="outline">Configure Webhooks</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect your chatbots with other services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <p className="font-medium">Slack</p>
                      <p className="text-sm text-foreground/70">Connect your chatbots to Slack channels</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
                      Z
                    </div>
                    <div>
                      <p className="font-medium">Zendesk</p>
                      <p className="text-sm text-foreground/70">Integrate with your Zendesk support system</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
                      I
                    </div>
                    <div>
                      <p className="font-medium">Intercom</p>
                      <p className="text-sm text-foreground/70">Connect your chatbots with Intercom</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
