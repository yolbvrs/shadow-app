import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MarketplaceGrid from './MarketplaceGrid';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [showMarketplace, setShowMarketplace] = useState(false);

  const handleMenuClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  const handleFindProfessionals = () => {
    setShowMarketplace(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={handleMenuClick} />
      
      {!showMarketplace ? (
        <>
          <HeroSection />
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose SHADOW?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with verified security professionals who have been thoroughly vetted for expertise and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Experts</h3>
                <p className="text-gray-600">All professionals are background-checked and certified</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">Get connected with experts in hours, not days</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Spectrum</h3>
                <p className="text-gray-600">From cyber to physical security - we cover it all</p>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleFindProfessionals}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Browse Security Professionals
              </button>
            </div>
          </div>
        </>
      ) : (
        <MarketplaceGrid />
      )}
    </div>
  );
};

export default AppLayout;