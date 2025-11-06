import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { Home } from "./components/pages/Home";
import { AboutUs } from "./components/pages/AboutUs";
import { HowItWorks } from "./components/pages/HowItWorks";
import { ContactSupport } from "./components/pages/ContactSupport";
import { AuthPage } from "./components/pages/AuthPage";
import { Toaster } from "./components/ui/sonner";

type Page = "home" | "about" | "how-it-works" | "contact" | "auth";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <AboutUs />;
      case "how-it-works":
        return <HowItWorks onNavigate={setCurrentPage} />;
      case "contact":
        return <ContactSupport />;
      case "auth":
        return <AuthPage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      {/* <ChatbotWidget isActive={currentPage === "contact"} /> */}
      <Toaster />
    </div>
  );
}
