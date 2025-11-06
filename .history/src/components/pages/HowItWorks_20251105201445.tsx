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
    { icon: Zap, text: 'Instant Payout', color: 'from-blue-400 to-blue-600' },
    { icon: Shield, text: 'Blockchain Verified', color: 'from-green-400 to-green-600' }
  ];

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 w-64 mx-auto">
        <div className="relative h-32 flex items-center justify-center mb-4">
          <div 
            className="absolute w-20 h-20 rounded-full border-2 border-blue-400/20 animate-ping"
            style={{ animationDuration: '1.5s' }}
          />
          
          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${features[active].color} flex items-center justify-center shadow-lg transition-all duration-500`}>
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
                  isActive ? 'bg-slate-100' : 'bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${features[active].color} opacity-10 blur-2xl rounded-2xl transition-all duration-700`} />
    </div>
  );
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
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
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
                {/* Animation/Visual Section */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {step.title === "Find Your Offer" ? (
                    // Exciting Offers Card for Find Your Offer step
                    <div className="relative max-w-md mx-auto">
                      {/* Step number indicator */}
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Exciting Offers Card */}
                    {/* Exciting Offers Card */}
                      <div className="w-full max-w-sm bg-background rounded-2xl shadow-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Header */}
                        <div className="p-6 text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                          <h3 className="text-2xl font-bold text-foreground mb-2">Exciting Offers</h3>
                          <p className="text-muted-foreground text-sm">Unlock amazing rewards</p>
                        </div>

                        {/* HOT Badge */}
                        <div className="px-6 pt-4 flex justify-end">
                          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            HOT
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground text-lg">Zero-Fee Account</h4>
                              <p className="text-muted-foreground text-sm mt-1">Start investing with no annual maintenance charges</p>
                            </div>
                          </div>

                          {/* Earn Section */}
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                            <p className="text-green-400 font-bold text-center text-sm">
                              Earn ₹500 per lead
                            </p>
                          </div>

                          {/* Share Button */}
                          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-default">
                            Share
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                      <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    </div>
                    
                  ) : step.title === "Share Your Link" ? (
                    // Trackable Link Animation for Share Your Link step
                    <div className="relative max-w-md mx-auto mt-12">
                      <div className="w-full p-8 glass rounded-2xl border border-cyan-500/30">
                        {/* Header with animated share icon */}
                        <div className="flex items-center gap-3 mb-6">
                          <svg 
                            className="w-7 h-7 text-cyan-400 animate-pulse"
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                          </svg>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Your Unique Trackable Link
                          </h3>
                        </div>
                        
                        {/* Link box with shimmer effect */}
                        <div className="relative bg-background/50 border border-cyan-500/30 rounded-lg px-4 py-4 mb-4 overflow-hidden group">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground font-mono truncate flex-1">
                              https://campaignwaala.com/ref/johndoe/creditcard_ffb
                            </span>
                            <button className="ml-4 p-2 hover:bg-cyan-500/10 rounded transition-colors cursor-default">
                              <svg 
                                className="w-5 h-5 text-cyan-400"
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                              </svg>
                            </button>
                          </div>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" style={{animation: "shimmer 3s infinite"}} />
                        </div>
                        
                        {/* Action buttons - Made non-clickable with default cursor */}
                        <div className="flex gap-3">
                          <button 
                            disabled
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm cursor-default"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                            </svg>
                            Share via Social
                          </button>
                          
                          <button 
                            disabled
                            className="flex-1 glass text-cyan-400 font-semibold py-3 px-4 rounded-lg border-2 border-cyan-500/30 flex items-center justify-center gap-2 text-sm cursor-default"
                          >
                            <svg 
                              className="w-5 h-5"
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                            Copy Link
                          </button>
                        </div>
                      </div>

                      {/* Step number indicator */}
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                      <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    </div>

                                   ) : step.title === "Track Performance" ? (
                    // Performance Dashboard for Track Performance step
                    <div className="relative max-w-md mx-auto">
                      {/* Step number indicator */}
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Performance Dashboard Card */}
                      <div className="w-full max-w-sm bg-background rounded-2xl shadow-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-b border-border">
                          <h3 className="text-xl font-bold text-foreground mb-2">Campaign Performance</h3>
                          <p className="text-muted-foreground text-sm">Quick overview of your campaign performance</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="p-6 space-y-6">
                          {/* Current Balance */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">Current Balance</p>
                              <p className="text-2xl font-bold text-foreground">5,200.75</p>
                              <p className="text-xs text-muted-foreground">Available for withdrawal</p>
                            </div>
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                          </div>

                          {/* Earnings Stats */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                              <p className="text-sm text-blue-400">Total Earnings</p>
                              <p className="text-lg font-bold text-foreground">18,500.00</p>
                              <p className="text-xs text-blue-400/80">Earned this month</p>
                            </div>
                            <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
                              <p className="text-sm text-amber-400">Total Bonus</p>
                              <p className="text-lg font-bold text-foreground">1,500.00</p>
                              <p className="text-xs text-amber-400/80">Referral bonuses</p>
                            </div>
                          </div>

                          {/* Performance Indicator */}
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Performance</span>
                              <span className="text-lg font-bold">56%</span>
                            </div>
                            <div className="w-full bg-white/30 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full" style={{ width: '56%' }}></div>
                            </div>
                            <p className="text-xs mt-2 opacity-90">Better than 80% of campaigns</p>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                      <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    </div>
                    
                ) : step.title === "Get Paid Instantly" ? (
                    // Instant Payment Gif for Get Paid Instantly step
                    <div className="relative max-w-md mx-auto">
                      {/* Step number indicator */}
                      <div className="absolute -top-20 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30 z-10">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Instant Payment Gif Component */}
                      <InstantPaymentGif />

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                      <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    </div>
                  ) : (
                    // 3D Icon for other steps
                    <div className="relative aspect-square max-w-md mx-auto">
                      {/* 3D Icon Container */}
                      <div className="absolute inset-0 glass rounded-3xl border-glow-animated overflow-hidden">
                        <Animated3DIcon type={step.icon} />
                      </div>

                      {/* Step number indicator */}
                      <div className="absolute -top-06 -left-6 glass rounded-2xl px-6 py-3 border-2 border-cyan-500/30">
                        <span className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                      <div className={`absolute -top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-gradient-to-r ${step.color} opacity-20 rounded-full blur-2xl animate-pulse`} />
                    </div>
                  )}
              
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