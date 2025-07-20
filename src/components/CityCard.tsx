
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface CityCardProps {
  name: string;
  state: string;
  count: number;
  image?: string;
}

const CityCard = ({ name, state, count, image }: CityCardProps) => {
  // Default image if none provided
  const defaultImage = `https://source.unsplash.com/featured/?${name},city,skyline`;
  
  return (
    <Link to={`/properties?city=${name}`} className="group">
      <div className="relative rounded-lg overflow-hidden h-60">
        {/* Background Image */}
        <img
          src={image || defaultImage}
          alt={`${name}, ${state}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center text-white mb-1">
            <MapPin size={16} className="mr-1" />
            <h3 className="font-semibold text-lg">{name}, {state}</h3>
          </div>
          <p className="text-white/90 text-sm">{count} Properties</p>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
