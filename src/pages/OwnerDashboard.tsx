
import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus, Home, User, ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { propertyListings } from '../utils/mockData';

const OwnerDashboard = () => {
  return (
    <DashboardLayout userType="owner">
      <div>
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text mb-1">Welcome back, John</h1>
            <p className="text-gray-600">Manage your properties and tenant applications.</p>
          </div>
          <Link to="/add-property">
            <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <Plus size={16} />
              Add New Property
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 mb-1">Active Listings</p>
                <h3 className="text-3xl font-bold text-text">4</h3>
              </div>
              <div className="bg-blue-50 p-3 rounded-full">
                <Home className="text-primary" size={24} />
              </div>
            </div>
            <div className="mt-4">
              <Link to="/my-listings" className="text-primary flex items-center text-sm hover:underline">
                View all listings <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 mb-1">Total Views</p>
                <h3 className="text-3xl font-bold text-text">127</h3>
              </div>
              <div className="bg-green-50 p-3 rounded-full">
                <svg className="text-green-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <span className="text-green-500 font-medium">↑ 12%</span> from last week
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 mb-1">Interested Tenants</p>
                <h3 className="text-3xl font-bold text-text">9</h3>
              </div>
              <div className="bg-purple-50 p-3 rounded-full">
                <User className="text-primary" size={24} />
              </div>
            </div>
            <div className="mt-4">
              <Link to="/tenant-applications" className="text-primary flex items-center text-sm hover:underline">
                View applications <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Your Listings */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-6">Your Listings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interested</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {propertyListings.slice(0, 4).map((property) => (
                  <tr key={property.id}>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                          <img src={property.images[0]} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{property.title}</div>
                          <div className="flex items-center text-gray-500 text-xs">
                            <MapPin size={12} className="mr-1" />
                            {property.location.city}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        property.isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {property.isAvailable ? 'Available' : 'Rented'}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-500">
                      {Math.floor(Math.random() * 100) + 10}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-500">
                      {Math.floor(Math.random() * 5)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Link to={`/properties/${property.id}`}>
                          <Button variant="outline" size="sm" className="h-8 px-3">
                            View
                          </Button>
                        </Link>
                        <Link to={`/properties/${property.id}/edit`}>
                          <Button variant="outline" size="sm" className="h-8 px-3">
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link to="/my-listings">
              <Button variant="link" className="text-primary">
                View All Listings
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Recent Tenant Applications</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`} alt="Applicant" className="h-full w-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="font-medium">John Doe</div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>Applied for</span>
                    <Link to={`/properties/${i}`} className="text-primary ml-1 hover:underline">
                      {propertyListings[i].title}
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  2 days ago
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0">
                  <MessageCircle size={16} className="mr-2" />
                  Message
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/tenant-applications">
              <Button variant="link" className="text-primary">
                View All Applications
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
