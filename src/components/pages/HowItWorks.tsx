import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Animated3DIcon } from "../Animated3DIcon";

interface HowItWorksProps {
  onNavigate: (page: "home" | "about" | "how-it-works" | "contact" | "auth") => void;
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Find Your Offer",
      description: "Browse through our curated selection of high-converting campaigns from premium brands and financial services",
      icon: "search" as const,
      color: "from-cyan-500 to-blue-500",
      details: [
        "Access exclusive financial products and services",
        "Filter by category, commission rate, and performance",
        "Real-time campaign analytics and insights",
        "Automated matching based on your audience",
      ],
    },
    {
      number: "02",
      title: "Share Your Link",
      description: "Generate your unique referral link and share it across your network through optimized channels",
      icon: "share" as const,
      color: "from-purple-500 to-pink-500",
      details: [
        "Personalized tracking links with analytics",
        "Multi-platform sharing tools and templates",
        "AI-powered content suggestions",
        "Built-in social media integration",
      ],
    },
    {
      number: "03",
      title: "Track Performance",
      description: "Monitor conversions in real-time with our advanced analytics dashboard and AI-powered insights",
      icon: "track" as const,
      color: "from-pink-500 to-purple-500",
      details: [
        "Real-time conversion tracking",
        "Detailed performance metrics and reports",
        "Predictive analytics and optimization tips",
        "A/B testing capabilities",
      ],
    },
    {
      number: "04",
      title: "Get Paid Instantly",
      description: "Receive instant payouts directly to your wallet with blockchain-verified transactions",
      icon: "wallet" as const,
      color: "from-amber-500 to-orange-500",
      details: [
        "Instant cryptocurrency or fiat payouts",
        "Multi-currency support (USD, EUR, BTC, ETH)",
        "Blockchain-verified transaction security",
        "No minimum payout threshold",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden particle-bg">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-400">Simple 4-Step Process</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-cyan">
              How It Works
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Start earning in minutes with our streamlined process designed for maximum efficiency
          </p>

          {/* Process Flow Indicator */}
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="glass rounded-full w-12 h-12 flex items-center justify-center text-sm border-2 border-cyan-500/30">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* 3D Icon - Alternating sides */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* 3D Icon Container */}
                    <div className="absolute inset-0 glass rounded-3xl border-glow-animated overflow-hidden">
                      <Animated3DIcon type={step.icon} />
                    </div>

                    {/* Step number indicator */}
                    <div className="absolute -top-6 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30">
                      <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h2 className="text-4xl md:text-5xl mb-4">
                        <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.title}
                        </span>
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start space-x-3 group">
                          <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {index === steps.length - 1 && (
                      <div className="pt-4">
                        <Button
                          size="lg"
                          onClick={() => onNavigate("auth")}
                          className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan group"
                        >
                          Start Earning Now
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="glass rounded-3xl p-12 md:p-20 border-glow-animated">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose Campaign Waala?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The most advanced referral platform in the market
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero Risk",
                  description: "No upfront costs or hidden fees. Start earning immediately.",
                  stat: "0%",
                  label: "Platform Fee",
                },
                {
                  title: "Fast Payouts",
                  description: "Get paid instantly with blockchain-verified transactions.",
                  stat: "<1min",
                  label: "Payout Time",
                },
                {
                  title: "High Rewards",
                  description: "Industry-leading commission rates and multi-tier bonuses.",
                  stat: "30%+",
                  label: "Commission",
                },
              ].map((benefit, i) => (
                <div key={i} className="text-center p-8 glass rounded-2xl hover:scale-105 transition-transform">
                  <div className="text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-cyan-400 mb-4">{benefit.label}</div>
                  <h3 className="text-2xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
