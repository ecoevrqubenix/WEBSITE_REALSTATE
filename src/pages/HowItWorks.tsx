
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, FileText, Home, Plus, Eye, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect home or list your property in just 3 simple steps. 
            Zero brokerage, direct connection with verified users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* For Tenants */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text mb-2">For Tenants</h2>
              <p className="text-gray-600">Find Your Perfect Home</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Search Properties</h3>
                  <p className="text-gray-600 text-sm">Filter by city, budget, and BHK to find properties that match your needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Apply with KYC</h3>
                  <p className="text-gray-600 text-sm">Submit your application with KYC documents. Zero brokerage guaranteed!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Move In</h3>
                  <p className="text-gray-600 text-sm">Complete the checklist, finalize with owner, and move into your new home.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/tenant/search">
                <Button className="bg-primary hover:bg-primary/90">
                  Start Searching
                </Button>
              </Link>
            </div>
          </div>

          {/* For Owners */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-text mb-2">For Owners</h2>
              <p className="text-gray-600">List Your Property</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">List Property</h3>
                  <p className="text-gray-600 text-sm">Add your property details, photos, and set your rental price. Zero listing fees!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Review Applications</h3>
                  <p className="text-gray-600 text-sm">Get verified tenant applications and communicate directly with interested renters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Finalize Rental</h3>
                  <p className="text-gray-600 text-sm">Complete the rental agreement and mark your property as rented.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/owner/list">
                <Button className="bg-accent hover:bg-accent/90">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-text mb-8">Why Choose HomeEase?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-text mb-2">Zero Brokerage</h3>
              <p className="text-gray-600 text-sm">No hidden fees or brokerage charges. Connect directly with property owners.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-text mb-2">Verified Users</h3>
              <p className="text-gray-600 text-sm">All tenants and owners go through KYC verification for safety and trust.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-text mb-2">Easy Process</h3>
              <p className="text-gray-600 text-sm">Simple 3-step process for both tenants and owners. Get started in minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;
