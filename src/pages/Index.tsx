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
      <PlatformFeatures />
      <AISection />
      <InlineCTA title="Launch Your Dating App in 45 Days" subtitle="Build, customize, and go live with your own white label dating app without long development cycles." />
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
