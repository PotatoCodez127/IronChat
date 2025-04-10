import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Select a Package | Chatbot Dashboard",
  description: "Choose a subscription package to start creating chatbots",
}

const packages = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams",
    features: ["1 chatbot", "1,000 messages per month", "Basic analytics", "Email support"],
    cta: "Get Started",
    href: "/pricing?plan=starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For growing businesses and teams",
    features: ["5 chatbots", "10,000 messages per month", "Advanced analytics", "Priority support", "Custom branding"],
    cta: "Get Started",
    href: "/pricing?plan=growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited chatbots",
      "Unlimited messages",
      "Advanced analytics & reporting",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
]

export default function SelectPackagePage() {
  return (
    <div className="container mx-auto py-16 px-4 mt-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Select a subscription package to start creating your chatbots. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? "border-primary shadow-lg" : ""}`}>
            {pkg.popular && (
              <div className="bg-primary text-primary-foreground text-center py-2 text-base font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl md:text-4xl font-bold">{pkg.price}</span>
                <span className="text-foreground/70 ml-1">/month</span>
              </div>
              <CardDescription className="mt-2 text-base text-foreground/70">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full button-primary text-lg py-6">
                <Link href={pkg.href}>{pkg.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
