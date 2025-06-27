import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Search, Star, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          SHADOW
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Connect with verified security professionals for all your protection needs. 
          From cybersecurity to physical security - find trusted experts instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white hover:bg-gray-200 text-black px-8 py-3">
            <Search className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black px-8 py-3"
            onClick={() => navigate('/login')}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Log In
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
            <Star className="mr-2 h-5 w-5" />
            Join as Professional
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;