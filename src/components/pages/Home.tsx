import { Button } from "../ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Sparkles } from "lucide-react";
import { ReferralChain3D } from "../ReferralChain3D";

interface HomeProps {
  onNavigate: (page: "home" | "about" | "how-it-works" | "contact" | "auth") => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Instant wallet withdrawals with real-time earnings tracking",
      color: "from-cyan-500 to-blue-500",
      glow: "glow-cyan",
    },
    {
      icon: Shield,
      title: "Blockchain Secured",
      description: "Military-grade encryption with decentralized verification",
      color: "from-purple-500 to-pink-500",
      glow: "glow-purple",
    },
    {
      icon: TrendingUp,
      title: "Exponential Growth",
      description: "Multi-tier referral system that scales with your network",
      color: "from-pink-500 to-amber-500",
      glow: "glow-pink",
    },
    {
  icon: Zap,
  title: "Sell & Earn (No Investment)",
  description: "Start earning instantly as an affiliate—no investment required.",
  color: "from-cyan-500 to-purple-500",
  glow: "glow-cyan",
},
{
  icon: TrendingUp,
  title: "Timely Reports",
  description: "Daily, weekly, and monthly performance reports for complete clarity.",
  color: "from-purple-500 to-cyan-500",
  glow: "glow-purple",
},
{
  icon: Shield,
  title: "Live Tracking Tools",
  description:
    "Track your conversions with real-time dashboard insights powered by Offer18 and AppsFlyer.",
  color: "from-pink-500 to-purple-500",
  glow: "glow-pink",
},
{
  icon: Sparkles,
  title: "Customised Payouts",
  description: "Bulk earners get customised payout cycles and exclusive support.",
  color: "from-cyan-500 to-pink-500",
  glow: "glow-cyan",
}
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Immersive 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border-glow-animated">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Next-Gen Financial Platform</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-cyan">
                    Amplify Your
                  </span>
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-glow-purple mt-2">
                    Earnings
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Harness the power of <span className="text-cyan-400">decentralized finance</span> with our revolutionary referral ecosystem
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => onNavigate("auth")}
                  className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6 glow-cyan group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("how-it-works")}
                  className="glass border-purple-500/30 hover:bg-purple-500/10 text-lg px-8 py-6"
                >
                  How It Works
                </Button>
              </div>
              

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: "50K+", label: "Active Users" },
                  { value: "$5M+", label: "Paid Out" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - 3D Interactive Model */}
            <div className="relative">
              <div className="relative aspect-square max-w-2xl mx-auto">
                {/* 3D Canvas with glassmorphic frame */}
                <div className="absolute inset-0 glass rounded-3xl border-glow-animated overflow-hidden">
                  <ReferralChain3D variant="chain" />
                </div>

                {/* Floating info badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-3 glow-purple">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    {/* <span className="text-sm">Interactive 3D Network</span> */}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-sm text-muted-foreground">Explore More</div>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>


{/* Finance Categories Intro */}
<section className="py-20">
  <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
    <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Finance Categories
    </h2>

    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Explore multiple financial services including <span className="text-cyan-400">Demat</span>, 
      <span className="text-purple-400"> Savings</span>, and 
      <span className="text-pink-400"> Affiliate Programs</span>.  
      Each category includes multiple offers so you can explore and choose the best.
    </p>

    <p className="text-lg text-cyan-400 font-medium">
      Affiliate – Sell & Earn without any investment.
    </p>
  </div>
</section>



      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-400">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Built for the Future
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of financial technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 ${feature.glow}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl blur-2xl group-hover:opacity-30 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<section className="py-28 relative">
  <div className="container mx-auto px-4 lg:px-8">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        What Our Users Say
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Real experiences from people who earn, track, and grow with CampaignWala.
      </p>
    </div>

    {/* Desktop / Tablet Grid */}
    <div className="hidden md:grid md:grid-cols-3 gap-10">
      {[
        {
          name: "Rohit S.",
          role: "Full-Time Affiliate Partner",
          review:
            "Instant withdrawals and real-time tracking helped me scale fast. Reports are accurate and the payout system is super smooth.",
        },
        {
          name: "Neha K.",
          role: "Digital Marketer",
          review:
            "Futuristic UI and effortless tools. The variety of offers is crazy and I love how everything is transparent and trackable.",
        },
        {
          name: "Amit Verma",
          role: "Finance Creator",
          review:
            "Custom payouts made bulk tasks easy. Live tools + detailed reports make the platform reliable for long-term work.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            group glass p-8 rounded-3xl border border-cyan-400/10
            transition-all duration-300 relative cursor-pointer
            hover:scale-[1.04]
            shadow-[0_0_20px_rgba(0,0,0,0.1)]
            hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
            dark:hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
            backdrop-blur-xl
          "
        >
          {/* Glow ring */}
          <div
            className="
              absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10
              blur-xl transition-opacity
            "
          />

          {/* Star Rating */}
          <div className="relative flex space-x-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="text-yellow-400 text-xl drop-shadow-lg"
              >
                ★
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="relative text-lg text-muted-foreground mb-6 leading-relaxed">
            “{item.review}”
          </p>

          {/* User */}
          <div className="relative">
            <div className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {item.name}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {item.role}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile Slider */}
    <div className="md:hidden overflow-hidden relative">
      <div
        className="flex animate-slide-x gap-6"
      >
        {[ 
          {
            name: "Rohit S.",
            role: "Full-Time Affiliate Partner",
            review:
              "Instant withdrawals and real-time tracking helped me scale fast. Reports are accurate and the payout system is super smooth.",
          },
          {
            name: "Neha K.",
            role: "Digital Marketer",
            review:
              "Futuristic UI and effortless tools. The variety of offers is crazy and I love how everything is transparent and trackable.",
          },
          {
            name: "Amit Verma",
            role: "Finance Creator",
            review:
              "Custom payouts made bulk tasks easy. Live tools + detailed reports make the platform reliable for long-term work.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="
              min-w-[85%] glass p-8 rounded-3xl border border-cyan-400/10
              transition-all duration-300 relative cursor-pointer
              shadow-[0_0_20px_rgba(0,0,0,0.1)]
              hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
              dark:hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
              backdrop-blur-xl
            "
          >
            {/* Star Rating */}
            <div className="relative flex space-x-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="text-yellow-400 text-xl drop-shadow-lg"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="relative text-lg text-muted-foreground mb-6 leading-relaxed">
              “{item.review}”
            </p>

            <div className="relative">
              <div className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {item.name}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>




      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="glass rounded-3xl p-12 md:p-20 text-center border-glow-animated">
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Transform Your Future?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of users already earning with Campaign Waala
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("auth")}
              className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-12 py-6 glow-cyan group"
            >
              Start Earning Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
