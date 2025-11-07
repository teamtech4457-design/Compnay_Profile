import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import cwLogo from "../assets/cw-logo.jpg"; // Correct path for your assets folder

type Page = "home" | "about" | "how-it-works" | "contact" | "auth";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { id: "home" as Page, label: "Home" },
    { id: "about" as Page, label: "About" },
    { id: "how-it-works" as Page, label: "How It Works" },
    { id: "contact" as Page, label: "Contact" },
  ];

  const headerBgClass = darkMode
    ? "bg-slate-900 shadow-xl"
    : "bg-white shadow-xl";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b ${headerBgClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Updated Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img
                src={cwLogo}
                alt="CW Logo"
                className="w-12 h-18 rounded-lg object-cover"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Campaign Waala
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Decentralized Finance
              </div>
            </div>
          </button>

          {/* Navigation, CTA, Theme Toggle, Mobile Menu... same as before */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg transition-all relative group ${
                  currentPage === item.id
                    ? "text-cyan-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => onNavigate("auth")}
              className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan"
            >
              Get Started
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
            </Button>
            <button
              aria-label="Toggle light and dark mode"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md bg-muted hover:bg-muted/70 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white dark:bg-slate-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate("auth");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
