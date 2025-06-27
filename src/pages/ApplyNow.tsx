import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, FileText, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ApplyNow: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    specialization: '',
    availability: '',
    certifications: '',
    background: '',
    references: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the correct Supabase function endpoint
      const response = await fetch(
        'https://esckhjnndwaronnmzjop.supabase.co/functions/v1/ad500f06-a23e-4854-a0a8-3b025b416ca5',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzY2toam5uZHdhcm9ubm16am9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MjIzMzgsImV4cCI6MjA2NjQ5ODMzOH0.nrGc4mXuGsQCtWfrbZD4wBYug0-rvm-ZuX8dKWM5R2w'
          },
          body: JSON.stringify(formData)
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: "Your application has been sent successfully.",
        });
        
        // Redirect to thank you page
        navigate('/thank-you');
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-wider">
            SECURITY PROVIDER APPLICATION
          </h1>
          <p className="text-gray-300">
            Join our elite network of security professionals
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Application Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-gray-800 border-gray-600 text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-gray-800 border-gray-600 text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="specialization" className="text-white">Specialization *</Label>
                <Select onValueChange={(value) => setFormData({...formData, specialization: value})} disabled={isSubmitting}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="physical-security">Physical Security</SelectItem>
                    <SelectItem value="executive-protection">Executive Protection</SelectItem>
                    <SelectItem value="surveillance">Surveillance</SelectItem>
                    <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                    <SelectItem value="penetration-testing">Penetration Testing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience" className="text-white">Years of Experience *</Label>
                <Select onValueChange={(value) => setFormData({...formData, experience: value})} disabled={isSubmitting}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="4-7">4-7 years</SelectItem>
                    <SelectItem value="8-15">8-15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="certifications" className="text-white">Certifications</Label>
                <Textarea
                  id="certifications"
                  value={formData.certifications}
                  onChange={(e) => setFormData({...formData, certifications: e.target.value})}
                  placeholder="List your relevant certifications (CISSP, CEH, CPP, etc.)"
                  className="bg-gray-800 border-gray-600 text-white"
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="background" className="text-white">Professional Background *</Label>
                <Textarea
                  id="background"
                  value={formData.background}
                  onChange={(e) => setFormData({...formData, background: e.target.value})}
                  placeholder="Describe your professional background and key achievements"
                  className="bg-gray-800 border-gray-600 text-white"
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="references"
                  checked={formData.references}
                  onCheckedChange={(checked) => setFormData({...formData, references: !!checked})}
                  className="border-gray-600"
                  disabled={isSubmitting}
                />
                <Label htmlFor="references" className="text-white text-sm">
                  I can provide professional references upon request
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                <Link to="/join-team" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 w-full"
                    disabled={isSubmitting}
                  >
                    Back
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyNow;