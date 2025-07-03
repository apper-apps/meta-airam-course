import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '@/components/organisms/NavigationBar';
import HeroSection from '@/components/organisms/HeroSection';
import CurriculumSection from '@/components/organisms/CurriculumSection';
import InstructorsSection from '@/components/organisms/InstructorsSection';
import BenefitsSection from '@/components/organisms/BenefitsSection';
import PreEnrollSection from '@/components/organisms/PreEnrollSection';
import Footer from '@/components/organisms/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      
      <main>
        <HeroSection />
        <CurriculumSection />
        <InstructorsSection />
        <BenefitsSection />
        <PreEnrollSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;