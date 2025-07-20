
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { PropertyListing } from '../utils/mockData';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
      {/* Image container */}
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
          aria-label="Save property"
        >
          <Heart size={18} className="text-gray-400" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
          <span className="text-primary font-bold">₹{property.rent}/mo</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin size={14} />
          <span className="text-sm">{property.location.city}, {property.location.state}</span>
        </div>
        
        <div className="flex justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center text-gray-500">
            <BedDouble size={16} />
            <span className="ml-1 text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Bath size={16} />
            <span className="ml-1 text-sm">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Square size={16} />
            <span className="ml-1 text-sm">{property.area} sqft</span>
          </div>
        </div>
      </div>
      
      {/* Link overlay */}
      <Link
        to={`/properties/${property.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${property.title}`}
      >
        <span className="sr-only">View property details</span>
      </Link>
    </div>
  );
};

export default PropertyCard;
