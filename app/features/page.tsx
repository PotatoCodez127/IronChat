import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TextWindow } from "@/components/text-window"
import {
  Check,
  MessageSquare,
  BarChart3,
  Users,
  Clock,
  Zap,
  Database,
  Globe,
  Shield,
  Code,
  Headphones,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features | IRONCHAT",
  description: "Explore the powerful features of our AI-powered chatbot platform",
}

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Powerful Features for Modern Businesses
            </h1>
            <p className="text-base md:text-xl text-foreground/80 mb-8">
              Our AI-powered chatbot platform is designed to help you provide exceptional customer support, 24/7.
            </p>
            <Button asChild size="lg" className="button-primary text-lg">
              <Link href="/register">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Core Features</h2>
            <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
              Our platform provides everything you need to create, deploy, and manage AI chatbots that truly understand
              your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Natural Language Processing</h3>
                <p className="text-foreground/80">
                  Our advanced NLP algorithms understand context and nuance, providing human-like responses that keep
                  customers engaged.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">24/7 Availability</h3>
                <p className="text-foreground/80">
                  Your chatbot never sleeps, providing instant support to customers around the clock, every day of the
                  year.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multi-Channel Support</h3>
                <p className="text-foreground/80">
                  Deploy your chatbot across your website, mobile app, and popular messaging platforms like WhatsApp and
                  Facebook Messenger.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Knowledge Base</h3>
                <p className="text-foreground/80">
                  Train your chatbot with your specific content, FAQs, and product information for accurate responses
                  tailored to your business.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">No-Code Builder</h3>
                <p className="text-foreground/80">
                  Our intuitive interface makes it easy to create and customize your chatbot without any technical
                  skills or coding knowledge.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-foreground/80">
                  Gain insights into customer interactions, popular questions, and chatbot performance to continuously
                  improve your service.
                </p>
              </div>
            </TextWindow>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Advanced Capabilities</h2>
            <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
              Take your customer support to the next level with these powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Personalization</h3>
                <p className="text-foreground/80">
                  Our chatbots learn from each interaction, becoming more personalized and effective over time. They
                  remember customer preferences and history to provide tailored responses.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Human Handoff</h3>
                <p className="text-foreground/80">
                  When conversations become too complex, our chatbots can seamlessly transfer the conversation to a
                  human agent, ensuring customers always get the help they need.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
                <p className="text-foreground/80">
                  Your data is protected with end-to-end encryption, regular security audits, and compliance with
                  industry standards like GDPR, HIPAA, and SOC 2.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                <p className="text-foreground/80">
                  Communicate with customers in their preferred language with our chatbots that support over 50
                  languages, breaking down language barriers for global businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your customer support?</h2>
            <p className="text-base md:text-xl text-foreground/80">
              Join thousands of businesses that have improved customer satisfaction and reduced support costs with our
              AI chatbots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="button-primary text-lg">
                <Link href="/register">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-outline text-lg">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/70">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
