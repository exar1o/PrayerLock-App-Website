import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MissionSection from "@/components/MissionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import geometricBg from "@/assets/geometric-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Islamic geometric background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${geometricBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <MissionSection />
        
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
