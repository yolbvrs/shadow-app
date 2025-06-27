import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  specialties: string[];
  image: string;
  responseTime: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  title,
  rating,
  reviews,
  location,
  price,
  specialties,
  image,
  responseTime
}) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border border-gray-300 shadow-lg bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-gray-600 flex items-center justify-center text-white font-bold text-xl">
            {name.charAt(0)}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-gray-900">{name}</CardTitle>
            <p className="text-sm text-gray-600 font-medium">{title}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-black text-black" />
                <span className="ml-1 text-sm font-medium">{rating}</span>
                <span className="text-sm text-gray-500 ml-1">({reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            Responds in {responseTime}
          </div>
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-200 text-black">
                {specialty}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-black">{price}</span>
            <Button className="bg-black hover:bg-gray-800 text-white">
              Contact Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;