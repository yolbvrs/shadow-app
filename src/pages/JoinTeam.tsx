import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wider">
            JOIN THE SHADOW TEAM
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Elite Security Providers Wanted
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Shield className="w-8 h-8 text-blue-400 mb-2" />
              <CardTitle className="text-white">Elite Network</CardTitle>
              <CardDescription className="text-gray-300">
                Join an exclusive network of top-tier security professionals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
              <CardTitle className="text-white">Premium Contracts</CardTitle>
              <CardDescription className="text-gray-300">
                Access high-value security contracts and premium clients
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Users className="w-8 h-8 text-green-400 mb-2" />
              <CardTitle className="text-white">Team Collaboration</CardTitle>
              <CardDescription className="text-gray-300">
                Work with the best in cybersecurity and physical security
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Zap className="w-8 h-8 text-purple-400 mb-2" />
              <CardTitle className="text-white">Cutting Edge</CardTitle>
              <CardDescription className="text-gray-300">
                Use the latest security technologies and methodologies
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <Link to="/apply-now" className="block">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-4 rounded-lg font-medium w-full max-w-md">
              Apply Now
            </Button>
          </Link>
          <div>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;