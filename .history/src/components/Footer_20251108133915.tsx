import { useState } from "react";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Sparkles, X } from "lucide-react";
import cwLogo from "../assets/cw-logo.jpg";

type Page = "home" | "about" | "how-it-works" | "contact" | "auth";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/campaign_wala?igsh=Z3FyY2pxZGthMTFu", label: "Instagram" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", onClick: () => setShowPrivacyPolicy(true) },
    { label: "Terms of Service", onClick: () => setShowTermsOfService(true) },
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
                    <img
                      src={cwLogo}
                      alt="CW Logo"
                      className="w-14 h-14 rounded-xl object-cover bg-white border border-purple-500/30"
                    />
                  </div>
                  <div>
                    <div className="text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Campaignwaala
                    </div>
                    <div className="text-xs text-muted-foreground">Decentralized Finance</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Revolutionizing financial opportunities through blockchain-powered referral technology and community-driven growth.
                </p>
              </div>
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
                      +91 9782099748
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
                &copy; {currentYear} Campaignwaala. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Powered by Blockchain Technology</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Privacy Policy Overlay */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-background/50 border border-purple-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4 backdrop-blur-sm">
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
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                {/* ...Place your Privacy Policy content here just as you have already... */}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Terms of Service Overlay */}
      {showTermsOfService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-background/50 border border-purple-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4 backdrop-blur-sm">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Terms of Service
              </h2>
              <button
                onClick={() => setShowTermsOfService(false)}
                className="w-8 h-8 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <p className="text-cyan-400 font-semibold">
                  Campaignwaala Platform Terms of Service
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use and access to the Campaignwaala platform (website and mobile app). By accessing, registering, or using any part of our Platform, you acknowledge and agree to these Terms, our Privacy Policy, and all applicable laws and regulations.
                </p>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By using Campaignwaala, you agree to be bound by these Terms as well as our Privacy Policy. If you do not agree, please refrain from using our Platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">2. Service Overview</h3>
                  <p>
                    Campaignwaala is a technology platform that enables agents to refer and sell various financial (Demat accounts, banking services, etc.) and non-financial products. You may earn commissions or rewards for successful referrals and sales as specified on the Platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">3. Eligibility</h3>
                  <p>
                    The Platform is intended exclusively for individuals aged 18 years or above and available primarily for Indian residents.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">4. Account Responsibilities</h3>
                  <p>
                    You must provide accurate and complete information while registering. You are responsible for keeping your account credentials secure and for all activities under your account. Report any unauthorized use immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">5. Permitted Usage</h3>
                  <p>
                    The Platform must only be used for lawful and personal purposes. Any unlawful, fraudulent, abusive, or disruptive activity is strictly prohibited.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">6. Intellectual Property</h3>
                  <p>
                    All trademarks, content, source code, digital assets, and brand materials of Campaignwaala remain the exclusive property of the company. Unauthorized reproduction, distribution, or modification is prohibited.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">7. Payments and KYC</h3>
                  <p>
                    Financial transactions are processed through secure payment gateways. Users must complete KYC verification as per Indian regulations to receive payouts or access certain features.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">8. Limitation of Liability</h3>
                  <p>
                    All services are offered "as is" and "as available." Campaignwaala is not liable for any indirect, incidental, consequential, or technical damages arising from the use of the Platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">9. Third-Party Links & Apps</h3>
                  <p>
                    The Platform may include links or integrations with third-party websites or apps. Campaignwaala does not endorse or take responsibility for their content, privacy, or security practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">10. Termination</h3>
                  <p>
                    In case of misuse, violation, fraud, or illegal activity, Campaignwaala reserves the right to suspend, terminate, or restrict your account. Company records may be retained as required by law after termination.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">11. Updates & Changes</h3>
                  <p>
                    Terms of Service may be revised periodically. Any changes will be communicated through the website or registered email. Continued use after updates constitutes acceptance.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">12. Governing Law & Dispute Resolution</h3>
                  <p>
                    These Terms are governed by the laws of India. Any dispute or claim shall be subject to the exclusive jurisdiction of Indian courts.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">13. Contact & Support</h3>
                  <p>
                    For any questions, concerns, or complaints regarding these Terms, please contact our Grievance Officer or write to support@campaignwaala.in.<br />
                    Office hours: Monday to Friday, 10:00AM – 6:00PM IST
                  </p>
                </div>
                <p className="text-xs text-purple-400/70 border-t border-purple-500/20 pt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => setShowTermsOfService(false)}
                    className="px-6 py-3 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 text-muted-foreground hover:text-cyan-400 transition-all flex items-center space-x-2"
                  >
                    <X size={18} />
                    <span>Close Terms</span>
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
