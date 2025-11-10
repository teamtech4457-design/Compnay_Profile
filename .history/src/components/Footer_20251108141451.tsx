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
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showComplianceSecurity, setShowComplianceSecurity] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/campaign_wala?igsh=Z3FyY2pxZGthMTFu", label: "Instagram" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", onClick: () => setShowPrivacyPolicy(true) },
    { label: "Terms of Service", onClick: () => setShowTermsOfService(true) },
    { label: "Cookie Policy", onClick: () => setShowCookiePolicy(true) },
    { label: "Compliance & Security", onClick: () => setShowComplianceSecurity(true) },
  ];

  return (
    <>
      <footer className="relative mt-auto border-t border-purple-500/20 bg-background/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

      {/* Privacy Policy Modal */}
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
                {/* Privacy Policy content is retained as-is */}
                <p className="text-cyan-400 font-semibold">
                  This Privacy Policy applies to access and use of the software including Web Application, and any other relevant medium. The website by the name "Campaignwala" is owned by Campaignwala and operated by Codessey. (together referred to interchangeably as “we,” “our,” or “Campaignwala”). Campaignwala enables agents to sell various financial and non-financial products and services such as Demat account, credit, saving accounts, etc., through our technology platform and earn money (“Services”).
                </p>
                <p>
                  We at Campaignwala are committed to protecting the privacy and security of our users (“you”, “your”, “user(s)”, or “subscriber(s)”). Your privacy is important, and maintaining your trust is paramount to us. This Privacy Policy (“Privacy Policy”) explains how we collect, use, process, disclose, and safeguard your information when you access and use our Services through our website and mobile app (collectively referred to as the “Platform”) located at: https://www.campaignwala.com/, which shall be incorporated into and subject to the Terms of Service of the Platform and shall be read harmoniously and in conjunction.
                </p>
                <p>
                  Our Platform and Services are primarily available for use within India only.
                </p>
                <p>
                  Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it. Your continued use of our Platform is an affirmation that you have read the Privacy Policy, understand it, assent and consent to its terms and conditions, including subsequent changes and amendments. If you do not agree to the terms, you are requested not to use or access our website.
                </p>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">WHAT INFORMATION DO WE COLLECT?</h3>
                  <p>
                    We collect Personal Information (as defined below) from you when you register with us on our Platform. When you start using the Services, we ask you to provide certain information as part of the registration process and in the course of your interaction with the Platform. Campaignwala collects Personal Information when you visit/use/register with Campaignwala, when you use emailed products or services, when you visit Campaignwala pages or the pages of certain Campaignwala partners, affiliates, or group companies, and when you enter promotions or sweepstakes.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">HOW DO WE USE YOUR INFORMATION?</h3>
                  <p>
                    We use the Personal and Non-Personal Information provided by you to create your account, verify your identity, and process your transactions on our Platform, customize the advertising and content you see, provide personalized user experience, fulfil your requests for products and services, improve our services, contact you, conduct research, and provide anonymous reporting for internal and external clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">TO WHOM DO WE DISCLOSE YOUR INFORMATION?</h3>
                  <p>
                    Campaignwala does not rent, sell, or share personal information about you with non-affiliated companies except to provide the products or services you’ve requested, or under the following circumstances: to trusted partners, to comply with legal obligations, to protect the rights, property, or safety of Campaignwala and its users, during any corporate restructuring, or for any other purpose disclosed at the time you provide the information.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">PRIVACY QUESTIONS AND GRIEVANCE REDRESSAL</h3>
                  <p>
                    If you have any questions, concerns, or suggestions regarding our Privacy Policy, please reach out to us at: support@campaignwaala.in
                  </p>
                  <p className="mt-3">
                    If you have any grievance or complaint with respect to our Platform, please contact our Grievance Officer: <br />
                    Name: [Enter Name Here] <br />
                    Email: support@campaignwaala.in <br />
                    Contact: +91 9782099748 <br />
                    Working Hours: Mon–Fri, 10:00 AM – 6:00 PM IST
                  </p>
                </div>
                <p className="text-xs text-purple-400/70 border-t border-purple-500/20 pt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
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

      {/* Terms of Service Modal */}
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

      {/* Cookie Policy Modal */}
      {showCookiePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-background/50 border border-purple-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4 backdrop-blur-sm">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cookie Policy
              </h2>
              <button
                onClick={() => setShowCookiePolicy(false)}
                className="w-8 h-8 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <p>
                  This Cookie Policy explains how Campaignwaala uses cookies and similar technologies on our platform (website and mobile app). By continuing to use our services, you consent to the use of cookies as described here.
                </p>
                <p>
                  Cookies are small data files stored on your device by your browser when you visit our platform. They help us recognise your device, enhance your user experience, improve our services, and provide secure access.
                </p>
                <h3 className="text-cyan-400 font-semibold">Types of Cookies We Use</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Strictly Necessary Cookies:</strong> Essential for operating our website and enabling secure access to services (such as login, account management, fraud prevention).</li>
                  <li><strong>Performance and Analytics Cookies:</strong> Used to collect information about how users interact with our website to improve performance, content, and features.</li>
                  <li><strong>Functionality Cookies:</strong> Help remember your preferences like language or settings to personalize your experience.</li>
                  <li><strong>Targeting and Advertising Cookies:</strong> May be used to deliver relevant ads and promotions based on your interests. We may collaborate with third-party ad service providers.</li>
                </ul>
                <p>
                  We may allow select third-party partners (analytics, marketing, payment gateways) to set cookies on our platform. These partners have their own cookie and privacy policies.
                </p>
                <p>
                  You can manage cookies through your browser or device settings. Blocking cookies may affect the platform’s functionality and your experience. By using our platform, you agree to our use of cookies as described.
                </p>
                <p>
                  This policy may be updated occasionally and changes will be posted on our website.
                </p>
                <p>
                  For questions regarding this Cookie Policy, please contact support@campaignwaala.in
                </p>
                <p className="text-xs text-purple-400/70 border-t border-purple-500/20 pt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => setShowCookiePolicy(false)}
                    className="px-6 py-3 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 text-muted-foreground hover:text-cyan-400 transition-all flex items-center space-x-2"
                  >
                    <X size={18} />
                    <span>Close Cookie Policy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compliance & Security Modal */}
      {showComplianceSecurity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-background/50 border border-purple-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4 backdrop-blur-sm">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Compliance & Security
              </h2>
              <button
                onClick={() => setShowComplianceSecurity(false)}
                className="w-8 h-8 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Campaignwaala is committed to protecting user data in line with applicable Indian data privacy laws, including the Information Technology Act, 2000 and associated rules.
                </p>
                <p>
                  We implement technical, physical, and administrative safeguards, including encryption, firewalls, secure servers, and access controls to protect personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p>
                  Campaignwaala complies with relevant financial, KYC, anti-money laundering standards, and TRAI guidelines to ensure lawful and ethical operations.
                </p>
                <p>
                  Users must protect their own account credentials and promptly report any suspected security breaches or unauthorized access.
                </p>
                <p>
                  In case of data breach affecting your personal information, Campaignwaala will notify affected parties as required by law.
                </p>
                <p>
                  We partner with service providers adhering to strict security standards but are not responsible for their practices. Users should review third-party policies carefully.
                </p>
                <p>
                  This policy is reviewed and updated periodically to reflect changes in regulations or technology. Updates will be posted on our platform.
                </p>
                <p>
                  For any questions or concerns about Compliance & Security, please contact support@campaignwaala.in
                </p>
                <p className="text-xs text-purple-400/70 border-t border-purple-500/20 pt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => setShowComplianceSecurity(false)}
                    className="px-6 py-3 rounded-lg glass border border-purple-500/20 hover:border-cyan-500/50 text-muted-foreground hover:text-cyan-400 transition-all flex items-center space-x-2"
                  >
                    <X size={18} />
                    <span>Close Compliance & Security</span>
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
