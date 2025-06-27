import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 py-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-wider leading-tight">
        SHADOW
      </h1>
      <p className="text-xl sm:text-2xl text-white mb-10 font-light max-w-sm">
        The Security Marketplace
      </p>

      {/* Get Started Button */}
      <Link to="/join-team" className="w-full max-w-xs">
        <Button 
          className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-4 rounded-lg font-medium transition-colors w-full touch-manipulation"
          size="lg"
        >
          Get Started
        </Button>
      </Link>

      {/* Log In Button */}
      <Link to="/login" className="mt-4 text-sm text-gray-400 hover:text-white transition">
        Already a provider? Log In
      </Link>
    </div>
  );
};

export default Index;