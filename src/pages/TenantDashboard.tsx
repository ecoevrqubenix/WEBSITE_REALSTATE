
import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import PropertyCard from '../components/PropertyCard';
import { propertyListings } from '../utils/mockData';
import { Search, ArrowRight, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TenantDashboard = () => {
  return (
    <DashboardLayout userType="tenant">
      <div>
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text mb-2">Welcome back, Alex</h1>
          <p className="text-gray-600">Continue exploring properties or check your recent activity.</p>
        </div>

        {/* Quick Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <form className="flex gap-4 flex-wrap md:flex-nowrap">
            <div className="w-full md:flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search for properties by location, type..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
              Find Properties
            </Button>
          </form>
        </div>

        {/* Featured Properties */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Featured Properties</h2>
            <Link to="/properties" className="text-primary flex items-center hover:underline">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyListings.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recently Viewed</h2>
            <Button variant="link" className="text-primary p-0">
              See all
            </Button>
          </div>
          <div className="space-y-4">
            {propertyListings.slice(0, 3).map(property => (
              <Link key={property.id} to={`/properties/${property.id}`} className="block">
                <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-md -mx-2">
                  <div className="w-16 h-16 bg-neutral flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-text line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="line-clamp-1">{property.location.address}</span>
                    </div>
                    <div className="text-primary font-semibold text-sm mt-1">${property.rent}/month</div>
                  </div>
                  <div className="flex-shrink-0 flex items-start text-gray-400 text-xs">
                    <Clock size={14} className="mr-1" />
                    <span>3h ago</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Saved Properties */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Saved Properties</h2>
            <p className="text-gray-600 mb-4">You have 5 saved properties to review.</p>
            <Link to="/saved">
              <Button variant="outline" className="w-full">
                View Saved Properties
              </Button>
            </Link>
          </div>

          {/* Applications */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Your Applications</h2>
            <p className="text-gray-600 mb-4">You have 2 pending applications.</p>
            <Link to="/applications">
              <Button variant="outline" className="w-full">
                View Applications
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TenantDashboard;
