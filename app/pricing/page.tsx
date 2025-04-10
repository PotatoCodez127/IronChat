import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 px-4 mt-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Choose the plan that's right for your business. All plans include a 14-day free trial.
        </p>
      </div>

      <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto mb-8">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="annual">
              Annual Billing <span className="ml-1.5 rounded-full bg-muted px-2 py-0.5 text-xs">Save 20%</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <PricingCard
              name="Starter"
              price="$29"
              description="Perfect for small businesses just getting started"
              features={[
                { included: true, text: "1 AI chatbot" },
                { included: true, text: "5,000 messages per month" },
                { included: true, text: "Basic analytics" },
                { included: true, text: "Email support" },
                { included: false, text: "Custom branding" },
                { included: false, text: "API access" },
                { included: false, text: "Advanced analytics" },
              ]}
              ctaText="Start Free Trial"
              ctaLink="/register"
              popular={false}
            />

            {/* Growth Plan */}
            <PricingCard
              name="Growth"
              price="$79"
              description="For growing businesses with more advanced needs"
              features={[
                { included: true, text: "5 AI chatbots" },
                { included: true, text: "25,000 messages per month" },
                { included: true, text: "Advanced analytics" },
                { included: true, text: "Priority support" },
                { included: true, text: "Custom branding" },
                { included: true, text: "API access" },
                { included: false, text: "Dedicated account manager" },
              ]}
              ctaText="Start Free Trial"
              ctaLink="/register"
              popular={true}
            />

            {/* Enterprise Plan */}
            <PricingCard
              name="Enterprise"
              price="$199"
              description="For large organizations with advanced requirements"
              features={[
                { included: true, text: "Unlimited AI chatbots" },
                { included: true, text: "Unlimited messages" },
                { included: true, text: "Advanced analytics & reporting" },
                { included: true, text: "24/7 priority support" },
                { included: true, text: "Custom branding & white labeling" },
                { included: true, text: "Advanced API access" },
                { included: true, text: "Dedicated account manager" },
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
              popular={false}
            />
          </div>
        </TabsContent>

        <TabsContent value="annual" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan Annual */}
            <PricingCard
              name="Starter"
              price="$23"
              description="Perfect for small businesses just getting started"
              features={[
                { included: true, text: "1 AI chatbot" },
                { included: true, text: "5,000 messages per month" },
                { included: true, text: "Basic analytics" },
                { included: true, text: "Email support" },
                { included: false, text: "Custom branding" },
                { included: false, text: "API access" },
                { included: false, text: "Advanced analytics" },
              ]}
              ctaText="Start Free Trial"
              ctaLink="/register"
              popular={false}
              billingPeriod="per month, billed annually"
            />

            {/* Growth Plan Annual */}
            <PricingCard
              name="Growth"
              price="$63"
              description="For growing businesses with more advanced needs"
              features={[
                { included: true, text: "5 AI chatbots" },
                { included: true, text: "25,000 messages per month" },
                { included: true, text: "Advanced analytics" },
                { included: true, text: "Priority support" },
                { included: true, text: "Custom branding" },
                { included: true, text: "API access" },
                { included: false, text: "Dedicated account manager" },
              ]}
              ctaText="Start Free Trial"
              ctaLink="/register"
              popular={true}
              billingPeriod="per month, billed annually"
            />

            {/* Enterprise Plan Annual */}
            <PricingCard
              name="Enterprise"
              price="$159"
              description="For large organizations with advanced requirements"
              features={[
                { included: true, text: "Unlimited AI chatbots" },
                { included: true, text: "Unlimited messages" },
                { included: true, text: "Advanced analytics & reporting" },
                { included: true, text: "24/7 priority support" },
                { included: true, text: "Custom branding & white labeling" },
                { included: true, text: "Advanced API access" },
                { included: true, text: "Dedicated account manager" },
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
              popular={false}
              billingPeriod="per month, billed annually"
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <FaqItem
            question="How does the 14-day free trial work?"
            answer="You can sign up for any plan and use all features for 14 days without being charged. No credit card is required to start your trial. At the end of your trial, you can choose to subscribe or your account will be automatically downgraded to a limited free version."
          />

          <FaqItem
            question="Can I change plans later?"
            answer="Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, the changes will take effect at the start of your next billing cycle."
          />

          <FaqItem
            question="What happens if I exceed my monthly message limit?"
            answer="If you exceed your monthly message limit, your chatbot will continue to function. We'll charge you for the additional messages at your current plan's per-message rate. You'll receive notifications as you approach your limit so there are no surprises."
          />

          <FaqItem
            question="Do you offer custom plans for larger organizations?"
            answer="Yes, we offer custom plans for organizations with specific requirements. Contact our sales team to discuss your needs and we'll create a tailored solution for you."
          />

          <FaqItem
            question="Is there a setup fee?"
            answer="No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual subscription fee."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-muted border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your customer support?</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have improved customer satisfaction and reduced support costs with our AI
            chatbots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="button-primary">
              <Link href="/register">Start Your Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-outline">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: { included: boolean; text: string }[]
  ctaText: string
  ctaLink: string
  popular?: boolean
  billingPeriod?: string
}

function PricingCard({
  name,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
  billingPeriod = "per month",
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full ${popular ? "border-primary shadow-lg relative" : ""}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          <span className="ml-1 text-sm text-foreground/60">{billingPeriod}</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-foreground/30 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? "" : "text-foreground/60"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${popular ? "button-primary" : ""}`}>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="border-b border-border pb-6">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-foreground/80">{answer}</p>
    </div>
  )
}
