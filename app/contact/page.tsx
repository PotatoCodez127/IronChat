import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | IRONCHAT",
  description: "Get in touch with our team for support, demos, or general inquiries",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-foreground/80">
              Have questions? We're here to help. Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-foreground/80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-background border-input text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-background border-input text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background border-input text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="bg-background border-input text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    required
                    className="bg-background border-input text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you need..."
                    rows={5}
                    required
                    className="bg-background border-input text-foreground resize-none"
                  />
                </div>

                <Button type="submit" className="w-full button-primary text-lg py-6">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-foreground/80 mb-8">You can also reach us using the information below.</p>

              <div className="space-y-4 md:space-y-8">
                <Card className="p-6 border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Us</h3>
                      <p className="text-foreground/80 mb-1">For general inquiries:</p>
                      <a href="mailto:info@ironchat.com" className="text-primary hover:underline">
                        info@ironchat.com
                      </a>
                      <p className="text-foreground/80 mt-3 mb-1">For support:</p>
                      <a href="mailto:support@ironchat.com" className="text-primary hover:underline">
                        support@ironchat.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Call Us</h3>
                      <p className="text-foreground/80 mb-1">Main Office:</p>
                      <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-foreground/80 mt-3 mb-1">Support Hotline:</p>
                      <a href="tel:+1-555-987-6543" className="text-primary hover:underline">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                      <p className="text-foreground/80">
                        123 AI Boulevard
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                      <p className="text-foreground/80">
                        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (PST)
                        <br />
                        <strong>Saturday:</strong> 10:00 AM - 2:00 PM (PST)
                        <br />
                        <strong>Sunday:</strong> Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
