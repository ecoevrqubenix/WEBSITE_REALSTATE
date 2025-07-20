
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import QuickListForm from '../../components/owner/QuickListForm';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyData {
  title: string;
  location: string;
  rent: string;
  bhk: string;
  images: FileList | null;
  description: string;
}

const ListPage = () => {
  const navigate = useNavigate();

  const handlePropertySubmit = (data: PropertyData) => {
    console.log('Property listed:', data);
    // Here you would typically send the data to your backend
    // For now, we'll just navigate to the applications page
    navigate('/owner/applications');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-text mb-2">List Your Property</h1>
          <p className="text-gray-600">Get your property rented quickly with zero listing fees</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Listing Form */}
            <div className="lg:col-span-2">
              <QuickListForm onSubmit={handlePropertySubmit} />
            </div>

            {/* Sidebar with Benefits */}
            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-primary mb-4">Owner Benefits</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Zero listing fees forever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Direct tenant communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Verified tenant profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Quick property approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Success Stats</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15 Days</div>
                    <div className="text-sm text-gray-600">Average time to rent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Owner satisfaction rate</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-500 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.8/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Listing Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Submit Property Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Get Tenant Applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Finalize Rental</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ListPage;
