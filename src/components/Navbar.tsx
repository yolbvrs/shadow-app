import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Menu, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button onClick={onMenuClick} className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-black" />
              <span className="text-xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                SHADOW
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">
              Browse Professionals
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">
              For Professionals
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-gray-700 hover:text-black"
              onClick={handleLoginClick}
            >
              <User className="h-4 w-4 mr-2" />
              Log In
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;