import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TextWindow } from "@/components/text-window"
import { Check } from "lucide-react"
import { ChatAnimation } from "@/components/chat-animation"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Isolated Hero Section */}
      <section className="hero-section mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                AI-Powered Customer Support That Works
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80">
                Build an AI chatbot with your knowledge base in minutes. No coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="button-primary">
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="button-outline">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <ChatAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Features that make a difference</h2>
            <p className="max-w-2xl mx-auto text-foreground/80">
              Our platform provides everything you need to create, deploy, and manage AI chatbots that truly understand
              your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Natural Conversations</h3>
                <p className="text-foreground/80">
                  Our AI understands context and nuance, providing human-like responses that keep customers engaged.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Integration</h3>
                <p className="text-foreground/80">
                  Seamlessly integrate with your website, mobile app, or messaging platforms with just a few clicks.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Knowledge Base</h3>
                <p className="text-foreground/80">
                  Train your chatbot with your specific content, FAQs, and product information for accurate responses.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">No Coding Required</h3>
                <p className="text-foreground/80">
                  Our intuitive interface makes it easy to create and customize your chatbot without any technical
                  skills.
                </p>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-foreground/80">
                  Gain insights into customer interactions, popular questions, and chatbot performance to continuously
                  improve.
                </p>
              </div>
            </TextWindow>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted by businesses worldwide</h2>
            <p className="max-w-2xl mx-auto text-foreground/80">
              See what our customers have to say about how our AI chatbots have transformed their customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TextWindow>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "We implemented the chatbot on our e-commerce site and saw a 40% reduction in support tickets within
                  the first month. Our customers love getting instant answers."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-foreground/60">CEO, E-commerce Company</p>
                  </div>
                </div>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "The ability to train the AI with our specific product information has been game-changing. Our support
                  team now focuses on complex issues while the chatbot handles routine questions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-foreground/60">Support Manager, SaaS Platform</p>
                  </div>
                </div>
              </div>
            </TextWindow>

            <TextWindow>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "Setting up the chatbot was incredibly easy. Within a day, we had it up and running on our website,
                  answering customer questions accurately and professionally."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    AJ
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-foreground/60">Marketing Director, Retail Brand</p>
                  </div>
                </div>
              </div>
            </TextWindow>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="mb-4">Ready to transform your customer support?</h2>
            <p className="text-xl text-foreground/80">
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
