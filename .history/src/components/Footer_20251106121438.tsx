import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Sparkles, X } from "lucide-react";

type Page = "home" | "about" | "how-it-works" | "contact" | "auth";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/campaign_wala?igsh=Z3FyY2pxZGthMTFu", label: "Instagram" },
];


  const legalLinks = [
    { label: "Privacy Policy", onClick: () => setShowPrivacyPolicy(true) },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Compliance & Security", href: "#" },
  ];

  return (
    <>
<footer className="relative mt-auto border-t border-purple-500/20 bg-background/50 backdrop-blur-sm">
        {/* Decorative gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center glow-cyan">
                      <span className="text-lg font-bold text-white">CW</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-lg opacity-50" />
                  </div>
                  <div>
                    <div className="text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Campaign Waala
                    </div>
                    <div className="text-xs text-muted-foreground">Decentralized Finance</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Revolutionizing financial opportunities through blockchain-powered referral technology and community-driven growth.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all hover:scale-110"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", page: "about" as Page },
                  { label: "How It Works", page: "how-it-works" as Page },
                  { label: "Contact Support", page: "contact" as Page },
                  { label: "Login / Sign Up", page: "auth" as Page },
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm group flex items-center"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-purple-400 transition-colors text-sm group flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className="text-muted-foreground hover:text-purple-400 transition-colors text-sm group flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg mb-6 bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg glass border border-purple-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-all">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <a href="mailto:support@campaignwaala.in" className="text-sm hover:text-cyan-400 transition-colors">
                      support@campaignwaala.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg glass border border-purple-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-all">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Phone</div>
                    <a href="tel:+919782099748" className="text-sm hover:text-cyan-400 transition-colors">
                      +
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg glass border border-purple-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-all">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <p className="text-sm">Global Operations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Campaign Waala. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Powered by Blockchain Technology</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Overlay - Integrated in same component */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
<div className="relative bg-background/50 border border-purple-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h2>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="w-8 h-8 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <p className="text-cyan-400 font-semibold">
                  This Privacy Policy applies to access and use of the software including Web Application, 
                  and any other relevant medium. The website by the name "Campaignwala" is owned by 
                  Campaignwala and operated by Codessey. (together referred to interchangeably as "we," 
                  "our," or "Campaignwala"). Campaignwala enables agents to sell various financial and 
                  non-financial products and services such as Demat account, credit, saving accounts, etc., 
                  through our technology platform and earn money ("Services").
                </p>

                <p>
                  We at Campaignwala are committed to protecting the privacy and security of our users 
                  ("you", "your", "user(s)", or "subscriber(s)"). Your privacy is important, and maintaining 
                  your trust is paramount to us. This Privacy Policy ("Privacy Policy") explains how we 
                  collect, use, process, disclose, and safeguard your information when you access and use 
                  our Services through our website and mobile app (collectively referred to as the "Platform") 
                  located at: https://www.campaignwala.com/, which shall be incorporated into and subject to 
                  the Terms of Service of the Platform and shall be read harmoniously and in conjunction.
                </p>

                <p>
                  Our Platform and Services are primarily available for use within India only.
                </p>

                <p>
                  Please read this Privacy Policy carefully to understand our policies and practices regarding 
                  your information and how we will treat it. Your continued use of our Platform is an affirmation 
                  that you have read the Privacy Policy, understand it, assent and consent to its terms and 
                  conditions, including subsequent changes and amendments. If you do not agree to the terms, 
                  you are requested not to use or access our website.
                </p>

                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">WHAT INFORMATION DO WE COLLECT?</h3>
                  <p>
                    We collect Personal Information (as defined below) from you when you register with us on our Platform. 
                    When you start using the Services, we ask you to provide certain information as part of the registration 
                    process and in the course of your interaction with the Platform. Campaignwala collects Personal Information 
                    when you visit/use/register with Campaignwala, when you use emailed products or services, when you visit 
                    Campaignwala pages or the pages of certain Campaignwala partners, affiliates, or group companies, and 
                    when you enter promotions or sweepstakes.
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">HOW DO WE USE YOUR INFORMATION?</h3>
                  <p>
                    We use the Personal and Non-Personal Information provided by you to create your account, 
                    verify your identity, and process your transactions on our Platform, customize the advertising 
                    and content you see, provide personalized user experience, fulfil your requests for products 
                    and services, improve our services, contact you, conduct research, and provide anonymous 
                    reporting for internal and external clients.
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">TO WHOM DO WE DISCLOSE YOUR INFORMATION?</h3>
                  <p>
                    Campaignwala does not rent, sell, or share personal information about you with non-affiliated 
                    companies except to provide the products or services you've requested, or under the following 
                    circumstances: to trusted partners, to comply with legal obligations, to protect the rights, 
                    property, or safety of Campaignwala and its users, during any corporate restructuring, or for 
                    any other purpose disclosed at the time you provide the information.
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">PRIVACY QUESTIONS AND GRIEVANCE REDRESSAL</h3>
                  <p>
                    If you have any questions, concerns, or suggestions regarding our Privacy Policy, please reach out to us at:
                    <br />
                    <span className="text-cyan-400">support@campaignwala.com</span>
                  </p>
                  <p className="mt-3">
                    If you have any grievance or complaint with respect to our Platform, please contact our Grievance Officer:
                    <br />
                    <span className="text-cyan-400">Grievance Officer</span>
                    <br />
                    Email: support@campaignwala.com
                    <br />
                    Working Hours: Mon–Fri, 10:00 AM – 6:00 PM IST
                  </p>
                </div>

                <p className="text-xs text-purple-400/70 border-t border-purple-500/20 pt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                {/* Close Button at the end */}
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => setShowPrivacyPolicy(false)}
                    className="px-6 py-3 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 text-muted-foreground hover:text-cyan-400 transition-all flex items-center space-x-2"
                  >
                    <X size={18} />
                    <span>Close Privacy Policy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}