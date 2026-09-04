import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { VastuFloorPlans } from './components/VastuFloorPlans';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('2D Home Plan (Vastu)');
  const [prefilledEstimate, setPrefilledEstimate] = useState<{
    service: string;
    area: number;
    approxPrice: number;
  } | null>(null);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedProjectType(serviceTitle);
    scrollToEnquiry();
  };

  const handleSelectVastuPlan = (planTitle: string) => {
    setSelectedProjectType(planTitle);
    scrollToEnquiry();
  };

  const handleConsultAboutProject = (projectTitle: string) => {
    setSelectedProjectType(projectTitle);
    scrollToEnquiry();
  };

  const handleEstimateSelect = (estimate: { service: string; area: number; approxPrice: number }) => {
    setPrefilledEstimate(estimate);
    setSelectedProjectType(estimate.service);
    scrollToEnquiry();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-pink-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onConsultationClick={scrollToEnquiry} />

      {/* Semantic Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero 
          onConsultationClick={scrollToEnquiry} 
          onViewWorkClick={scrollToPortfolio} 
        />

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: Services (Grid Card Layout) */}
        <Services onSelectService={handleSelectService} />

        {/* Section 4: 2D Floor Plans for Homes & Apartments as per Vastu */}
        <VastuFloorPlans onSelectPlan={handleSelectVastuPlan} />

        {/* Section 5: Portfolio / Featured Works */}
        <Portfolio onConsultAboutProject={handleConsultAboutProject} />

        {/* Section 6: Why Choose Us & Cost Estimator */}
        <WhyChooseUs onEstimateSelect={handleEstimateSelect} />

        {/* Section 7: Enquiry / Contact Form */}
        <EnquiryForm 
          prefilledProjectType={selectedProjectType} 
          prefilledEstimate={prefilledEstimate} 
        />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Quick Action Floating Widget */}
      <FloatingActions />
    </div>
  );
}
