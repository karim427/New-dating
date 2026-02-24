import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FounderReviews from "@/components/landing/FounderReviews";
import ClientsSection from "@/components/landing/ClientsSection";
import WhyWhiteLabel from "@/components/landing/WhyWhiteLabel";
import PlatformFeatures from "@/components/landing/PlatformFeatures";
import MonetizationSection from "@/components/landing/MonetizationSection";
import PricingSection from "@/components/landing/PricingSection";
import AISection from "@/components/landing/AISection";
import WebPlatformSection from "@/components/landing/WebPlatformSection";
import TechCustomization from "@/components/landing/TechCustomization";
import InlineCTA from "@/components/landing/InlineCTA";
import HowItWorks from "@/components/landing/HowItWorks";
import DatingMarket from "@/components/landing/DatingMarket";
import CrossSellResources from "@/components/landing/CrossSellResources";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <WhyWhiteLabel />
      <InlineCTA title="Want to See It in Action?" subtitle="Get a personalized demo of your own branded dating platform." />
      <PlatformFeatures />
      <AISection />
      <InlineCTA title="Ready to Build Your Dating App?" subtitle="Talk to our team about your requirements and timeline." />
      <MonetizationSection />
      <WebPlatformSection />
      <HowItWorks />
      <DatingMarket />
      <PricingSection />
      <TechCustomization />
      <FounderReviews />
      <CrossSellResources />
      <FAQSection />
      <FinalCTA />
      <LandingFooter />
    </main>
  );
};

export default Index;
