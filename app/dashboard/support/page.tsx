import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, MessageSquare, Video, BookOpen, Mail, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Help & Support</h1>
        <p className="text-foreground/60">Get help with your chatbots and account</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="h-4 w-4" />
              </div>
              <CardTitle>Documentation</CardTitle>
            </div>
            <CardDescription>Comprehensive guides and API references</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-foreground/80 mb-4">
              Explore our detailed documentation to learn how to create, customize, and deploy your chatbots.
            </p>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link href="#">View Documentation</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Video className="h-4 w-4" />
              </div>
              <CardTitle>Video Tutorials</CardTitle>
            </div>
            <CardDescription>Step-by-step video guides</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-foreground/80 mb-4">
              Watch our video tutorials to learn how to get the most out of our platform and features.
            </p>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link href="#">Watch Tutorials</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="h-4 w-4" />
              </div>
              <CardTitle>Knowledge Base</CardTitle>
            </div>
            <CardDescription>Answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-foreground/80 mb-4">
              Browse our knowledge base to find answers to frequently asked questions and troubleshooting guides.
            </p>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link href="#">Explore Knowledge Base</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What can we help you with?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Describe your issue in detail..." rows={5} />
                </div>
                <Button type="submit" className="button-primary w-full">
                  Submit Ticket
                </Button>
              </form>
              <div className="text-sm text-foreground/60 text-center">
                Our support team typically responds within 24 hours.
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Other Ways to Get Help</h3>

                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Live Chat</h4>
                    <p className="text-sm text-foreground/80 mb-2">
                      Chat with our support team in real-time during business hours.
                    </p>
                    <Button variant="outline" size="sm">
                      Start Chat
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Support</h4>
                    <p className="text-sm text-foreground/80 mb-2">Send us an email and we'll get back to you.</p>
                    <a href="mailto:support@ironchat.com" className="text-primary hover:underline text-sm font-medium">
                      support@ironchat.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Support</h4>
                    <p className="text-sm text-foreground/80 mb-2">Available for Growth and Enterprise customers.</p>
                    <a href="tel:+1-555-987-6543" className="text-primary hover:underline text-sm font-medium">
                      +1 (555) 987-6543
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
