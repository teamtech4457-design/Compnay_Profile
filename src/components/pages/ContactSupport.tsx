import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  MapPin,
  Headphones,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import { FloatingGeometry } from "../FloatingGeometry";

export function ContactSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "How do I start earning with Campaign Waala?",
      answer:
        "Simply sign up for a free account, browse available campaigns, select the ones that match your audience, and start sharing your unique referral links. You'll earn commissions instantly when someone converts through your link.",
    },
    {
      question: "What are the payout methods and minimums?",
      answer:
        "We support multiple payout methods including bank transfer, PayPal, and cryptocurrency (BTC, ETH). There's no minimum payout threshold - you can withdraw your earnings anytime, instantly.",
    },
    {
      question: "How does the referral tracking work?",
      answer:
        "We use blockchain-verified tracking technology to ensure 100% accuracy. Every click, conversion, and commission is recorded on the blockchain, providing complete transparency and preventing fraud.",
    },
    {
      question: "Are there any fees or hidden costs?",
      answer:
        "Absolutely not. Campaign Waala is completely free to join and use. We don't charge any platform fees, subscription costs, or hidden charges. You keep 100% of your earned commissions.",
    },
    {
      question: "Can I promote multiple campaigns simultaneously?",
      answer:
        "Yes! You can promote as many campaigns as you want simultaneously. Our dashboard makes it easy to manage multiple campaigns, track their individual performance, and optimize your strategy.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 customer support through live chat, email, and phone. Our dedicated support team is here to help you with any questions, technical issues, or optimization strategies.",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@campaignwaala.com",
      description: "24/7 email support",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      color: "from-pink-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0a0a1f] dark:via-[#1a0a2e] dark:to-[#0a0a1f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden particle-bg">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
            <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-cyan-600 dark:text-cyan-400">
              We're Here to Help
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-cyan">
              Contact & Support
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-white/80 max-w-2xl mx-auto">
            Get in touch with our team or find answers in our FAQ section
          </p>
        </div>
      </section>

      {/* Split Screen - Contact Form & 3D Visual */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Left - Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 glow-cyan`}>
                        <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg mb-1 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 break-all">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-white/80 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-300 dark:border-purple-500/30 backdrop-blur-lg shadow-lg">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Send Us a Message
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-white/60">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white dark:bg-gray-800/60 border-2 border-gray-300 dark:border-purple-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 placeholder:text-gray-400 dark:placeholder:text-white/40 text-gray-900 dark:text-white w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white dark:bg-gray-800/60 border-2 border-gray-300 dark:border-purple-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 placeholder:text-gray-400 dark:placeholder:text-white/40 text-gray-900 dark:text-white w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-white dark:bg-gray-800/60 border-2 border-gray-300 dark:border-purple-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 resize-none placeholder:text-gray-400 dark:placeholder:text-white/40 text-gray-900 dark:text-white w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Right - 3D Visual & Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* 3D Element */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] glass rounded-2xl sm:rounded-3xl border-glow-animated overflow-hidden">
                <FloatingGeometry variant="torus" />

                {/* Overlay Info */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                  <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center max-w-sm pointer-events-auto">
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-cyan-600 dark:text-cyan-400" />
                    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-gray-900 dark:text-white">
                      Global Presence
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
                      Operating in 45+ countries with 24/7 support
                    </p>
                  </div>

                  {/* Chat Bubbles */}
                  <div className="absolute top-24 left-28 w-10 h-3 bg-cyan-500/30 rounded-lg animate-bubble-1" />
                  <div className="absolute top-32 right-24 w-12 h-3 bg-purple-500/30 rounded-lg animate-bubble-2" />
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "<1hr", label: "Response Time" },
                  { value: "24/7", label: "Support Available" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "50K+", label: "Happy Users" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-transform">
                    <div className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-purple-200/20 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-purple-900/10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-600 dark:text-purple-400">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Got Questions?
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 border-glow-animated">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-900/50 rounded-2xl px-6 border-2 border-purple-500/20 hover:border-cyan-500/40 transition-colors backdrop-blur-sm">
                  <AccordionTrigger className="text-left text-white hover:text-cyan-400 transition-colors py-5">
                    <span className="text-base font-medium">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes blob {
          0%, 100% { 
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: scale(1);
          }
          25% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: scale(1.05);
          }
          50% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: scale(0.95);
          }
          75% { 
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
            transform: scale(1.02);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bubble-1 {
          0%, 100% { opacity: 0; transform: translateY(0px) scale(0.8); }
          10%, 90% { opacity: 1; transform: translateY(-6px) scale(1); }
        }
        
        @keyframes bubble-2 {
          0%, 100% { opacity: 0; transform: translateY(0px) scale(0.8); }
          10%, 90% { opacity: 1; transform: translateY(-6px) scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bubble-1 {
          animation: bubble-1 4s ease-in-out infinite;
        }
        
        .animate-bubble-2 {
          animation: bubble-2 4s ease-in-out infinite 2s;
        }
        
        .rounded-blob {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
