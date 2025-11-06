import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";
import { Animated3DIcon } from "../Animated3DIcon";
import { useState, useEffect } from "react";

interface HowItWorksProps {
  onNavigate: (page: "home" | "about" | "how-it-works" | "contact" | "auth") => void;
}

// Instant Payment Animation Component
function InstantPaymentGif() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % 2);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Zap, text: "Instant Payout", color: "from-blue-400 to-blue-600" },
    { icon: Shield, text: "Blockchain Verified", color: "from-green-400 to-green-600" },
  ];

  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 w-64 mx-auto transition-colors">
        <div className="relative h-32 flex items-center justify-center mb-4">
          <div
            className="absolute w-20 h-20 rounded-full border-2 border-blue-400/20 animate-ping"
            style={{ animationDuration: "1.5s" }}
          />
          <div
            className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${features[active].color} flex items-center justify-center shadow-lg transition-all duration-500`}
          >
            {active === 0 ? (
              <Zap className="w-8 h-8 text-white" />
            ) : (
              <Shield className="w-8 h-8 text-white" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = active === index;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-slate-100 dark:bg-slate-800"
                    : "bg-white dark:bg-gray-900"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${features[active].color} opacity-10 blur-2xl rounded-2xl transition-all duration-700`}
      />
    </div>
  );
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Find Your Offer",
      description:
        "Browse through our curated selection of high-converting campaigns from premium brands and financial services",
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
      description:
        "Generate your unique referral link and share it across your network through optimized channels",
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
      description:
        "Monitor conversions in real-time with our advanced analytics dashboard and AI-powered insights",
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
      description:
        "Receive instant payouts directly to your wallet with blockchain-verified transactions",
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
    <div className="min-h-screen pt-20 transition-colors">
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
            Start earning in minutes with our streamlined process designed for
            maximum efficiency
          </p>
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
                {/* Animation / Card */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {step.title === "Find Your Offer" ? (
                    // 🌙 Fixed Exciting Offers Card
                    <div className="relative max-w-md mx-auto">
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>

                      <div className="w-full max-w-sm bg-white dark:bg-[#0a1122] rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-6 text-center bg-gradient-to-br from-blue-50 dark:from-[#101b3c] to-indigo-50 dark:to-[#1a2755] transition-colors">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Exciting Offers
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Unlock amazing rewards
                          </p>
                        </div>

                        <div className="px-6 pt-4 flex justify-end">
                          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            HOT
                          </span>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                Zero-Fee Account
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                Start investing with no annual maintenance charges
                              </p>
                            </div>
                          </div>

                          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3 mb-4">
                            <p className="text-green-800 dark:text-green-400 font-bold text-center text-sm">
                              Earn ₹500 per lead
                            </p>
                          </div>

                          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-default">
                            Share
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : step.title === "Track Performance" ? (
                    // existing Track Performance card
                    <div className="relative max-w-md mx-auto">
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>

                      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="p-6 bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-pink-50 dark:to-pink-900/20 border-b border-gray-200 dark:border-gray-700">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Campaign Performance
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Quick overview of your campaign performance
                          </p>
                        </div>
                        {/* ... rest unchanged */}
                      </div>
                    </div>
                  ) : step.title === "Get Paid Instantly" ? (
                    <div className="relative max-w-md mx-auto">
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      <InstantPaymentGif />
                    </div>
                  ) : null}
                </div>

                {/* Text Section */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl md:text-5xl mb-4">
                        <span
                          className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                        >
                          {step.title}
                        </span>
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

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
    </div>
  );
}
