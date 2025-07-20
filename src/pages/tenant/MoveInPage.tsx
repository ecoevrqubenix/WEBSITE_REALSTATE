
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import MoveInChecklist from '../../components/tenant/MoveInChecklist';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MoveInPage = () => {
  const navigate = useNavigate();

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
            Back
          </Button>
          
          <h1 className="text-3xl font-bold text-text mb-2">Almost There!</h1>
          <p className="text-gray-600">Complete these final steps to move into your new home</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checklist */}
            <div className="lg:col-span-2">
              <MoveInChecklist />
            </div>

            {/* Sidebar with Property Info and Support */}
            <div className="space-y-6">
              {/* Selected Property */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Your Selected Property</h3>
                <div className="space-y-3">
                  <div className="h-32 bg-gray-200 rounded-md"></div>
                  <h4 className="font-medium">Modern 2BHK Apartment</h4>
                  <p className="text-sm text-gray-600">Bandra West, Mumbai</p>
                  <p className="text-primary font-semibold">₹35,000/month</p>
                </div>
              </div>

              {/* Owner Contact */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Property Owner</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Rajesh Kumar</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star size={12} className="text-yellow-500 fill-current" />
                        <span>4.8 rating</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contact Owner
                  </Button>
                </div>
              </div>

              {/* Support */}
              <div className="bg-accent/10 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to help you with the move-in process.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MoveInPage;
