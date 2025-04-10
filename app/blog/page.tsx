import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TextWindow } from "@/components/text-window"
import { CalendarDays, Clock, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | IRONCHAT",
  description: "Latest news, tips, and insights about AI chatbots and customer support",
}

const blogPosts = [
  {
    id: 1,
    title: "How AI Chatbots Are Revolutionizing Customer Support",
    excerpt:
      "Discover how businesses are using AI chatbots to provide 24/7 support, reduce costs, and improve customer satisfaction.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "AI Trends",
    slug: "how-ai-chatbots-revolutionizing-customer-support",
  },
  {
    id: 2,
    title: "5 Ways to Train Your Chatbot for Better Performance",
    excerpt:
      "Learn the best practices for training your AI chatbot to understand customer queries and provide accurate, helpful responses.",
    date: "June 2, 2023",
    readTime: "7 min read",
    category: "Best Practices",
    slug: "5-ways-train-chatbot-better-performance",
  },
  {
    id: 3,
    title: "The Future of Conversational AI: Trends to Watch",
    excerpt:
      "Explore the emerging trends in conversational AI and how they will shape the future of customer interactions.",
    date: "June 18, 2023",
    readTime: "6 min read",
    category: "Industry Insights",
    slug: "future-conversational-ai-trends-watch",
  },
  {
    id: 4,
    title: "Case Study: How Company X Reduced Support Tickets by 45%",
    excerpt:
      "See how a leading e-commerce company implemented our AI chatbot and dramatically reduced their support workload.",
    date: "July 5, 2023",
    readTime: "8 min read",
    category: "Case Studies",
    slug: "case-study-company-x-reduced-support-tickets",
  },
  {
    id: 5,
    title: "Integrating Your Chatbot with CRM Systems: A Complete Guide",
    excerpt:
      "A step-by-step guide to connecting your AI chatbot with popular CRM systems for a unified customer experience.",
    date: "July 21, 2023",
    readTime: "10 min read",
    category: "Tutorials",
    slug: "integrating-chatbot-crm-systems-guide",
  },
  {
    id: 6,
    title: "Measuring Chatbot ROI: Key Metrics to Track",
    excerpt:
      "Learn which metrics matter most when evaluating the performance and ROI of your AI chatbot implementation.",
    date: "August 8, 2023",
    readTime: "7 min read",
    category: "Analytics",
    slug: "measuring-chatbot-roi-key-metrics",
  },
]

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              IRONCHAT Blog
            </h1>
            <p className="text-base md:text-xl text-foreground/80">
              Latest news, tips, and insights about AI chatbots and customer support
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {blogPosts.map((post) => (
              <TextWindow key={post.id}>
                <article className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-foreground/60">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium flex items-center hover:underline"
                    >
                      Read more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              </TextWindow>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="button-outline">
              <Link href="/blog/archive">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Get the latest articles, updates, and tips delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="button-primary whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-foreground/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
