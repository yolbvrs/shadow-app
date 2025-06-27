import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <CardTitle className="text-white text-2xl sm:text-3xl">
              Application Submitted Successfully!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-300 text-lg">
              Thank you for your interest in joining our elite security network.
            </p>
            <p className="text-gray-400">
              Your application has been sent to our team at{' '}
              <span className="text-blue-400 font-mono">yolniverse@pm.me</span>
            </p>
            <p className="text-gray-400">
              We will review your application and contact you within 2-3 business days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/" className="flex-1">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Button>
              </Link>
              <Link to="/join-team" className="flex-1">
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-white hover:bg-gray-800 w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;