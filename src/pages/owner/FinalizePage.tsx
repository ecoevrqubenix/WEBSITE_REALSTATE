
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import RentOutFinalizer from '../../components/owner/RentOutFinalizer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FinalizePage = () => {
  const navigate = useNavigate();

  // Mock rental details - in real app, this would come from route params or API
  const rentalDetails = {
    propertyTitle: 'Modern 2BHK Apartment in Bandra West',
    tenantName: 'Priya Sharma',
    monthlyRent: '35,000',
    securityDeposit: '70,000',
    startDate: '2024-02-01',
    endDate: '2025-01-31'
  };

  const handleFinalize = () => {
    console.log('Rental finalized');
    // Here you would typically update the backend
    // Show success message and redirect
    alert('Congratulations! Your property has been successfully rented out.');
    navigate('/owner-dashboard');
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
            Back to Applications
          </Button>
          
          <h1 className="text-3xl font-bold text-text mb-2">Finalize Rental Agreement</h1>
          <p className="text-gray-600">Complete the final steps to mark your property as rented</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Finalizer */}
            <div className="lg:col-span-2">
              <RentOutFinalizer 
                rentalDetails={rentalDetails}
                onFinalize={handleFinalize}
              />
            </div>

            {/* Sidebar with Info */}
            <div className="space-y-6">
              {/* Success Tips */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={20} className="text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Almost Done!</h3>
                </div>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Complete all checklist items</li>
                  <li>• Ensure all documents are signed</li>
                  <li>• Verify deposit payment</li>
                  <li>• Hand over keys safely</li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">After Finalization</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-900">Property Status</h4>
                    <p>Your property will be marked as "Rented" and hidden from search results.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Tenant Management</h4>
                    <p>Access tenant details and communication tools from your dashboard.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Future Listings</h4>
                    <p>You can list the property again when the current lease expires.</p>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to help you complete the rental process smoothly.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full text-sm">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full text-sm">
                    Download Agreement Template
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinalizePage;
