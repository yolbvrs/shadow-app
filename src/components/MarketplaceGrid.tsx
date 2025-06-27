import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import SearchFilters from './SearchFilters';

const mockProfessionals = [
  {
    name: 'Alex Chen',
    title: 'Cybersecurity Specialist',
    rating: 4.9,
    reviews: 127,
    location: 'New York, NY',
    price: '$150/hr',
    specialties: ['Penetration Testing', 'Network Security', 'Incident Response'],
    image: '',
    responseTime: '2 hours'
  },
  {
    name: 'Sarah Johnson',
    title: 'Physical Security Expert',
    rating: 4.8,
    reviews: 89,
    location: 'Los Angeles, CA',
    price: '$120/hr',
    specialties: ['Risk Assessment', 'Security Planning', 'Access Control'],
    image: '',
    responseTime: '1 hour'
  },
  {
    name: 'Mike Rodriguez',
    title: 'Security Consultant',
    rating: 4.7,
    reviews: 156,
    location: 'Chicago, IL',
    price: '$200/hr',
    specialties: ['Compliance', 'Security Audits', 'Policy Development'],
    image: '',
    responseTime: '4 hours'
  },
  {
    name: 'Emily Davis',
    title: 'Digital Forensics Investigator',
    rating: 4.9,
    reviews: 73,
    location: 'Remote',
    price: '$175/hr',
    specialties: ['Digital Forensics', 'Incident Investigation', 'Data Recovery'],
    image: '',
    responseTime: '3 hours'
  },
  {
    name: 'David Kim',
    title: 'Information Security Analyst',
    rating: 4.6,
    reviews: 94,
    location: 'San Francisco, CA',
    price: '$140/hr',
    specialties: ['Threat Analysis', 'Security Monitoring', 'Vulnerability Assessment'],
    image: '',
    responseTime: '2 hours'
  },
  {
    name: 'Lisa Thompson',
    title: 'Corporate Security Director',
    rating: 4.8,
    reviews: 112,
    location: 'Boston, MA',
    price: '$250/hr',
    specialties: ['Executive Protection', 'Security Strategy', 'Team Management'],
    image: '',
    responseTime: '6 hours'
  }
];

const MarketplaceGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Security Professionals</h2>
        <p className="text-gray-600">Connect with verified experts in cybersecurity, physical security, and more</p>
      </div>
      
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        activeFilters={activeFilters}
        removeFilter={removeFilter}
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfessionals.map((professional, index) => (
          <ServiceCard key={index} {...professional} />
        ))}
      </div>
    </div>
  );
};

export default MarketplaceGrid;