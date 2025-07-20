
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import KYCApplicationForm from '../../components/tenant/KYCApplicationForm';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ApplicationData {
  documents: FileList | null;
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    occupation: string;
    monthlyIncome: string;
  };
}

const ApplyPage = () => {
  const navigate = useNavigate();

  const handleApplicationSubmit = (data: ApplicationData) => {
    console.log('Application submitted:', data);
    // Here you would typically send the data to your backend
    // For now, we'll just navigate to the move-in page
    navigate('/tenant/move-in');
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
            Back to Search
          </Button>
          
          <h1 className="text-3xl font-bold text-text mb-2">Apply for Your Dream Home</h1>
          <p className="text-gray-600">Complete your application in just a few minutes</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Application Form */}
            <div className="lg:col-span-2">
              <KYCApplicationForm onSubmit={handleApplicationSubmit} />
            </div>

            {/* Sidebar with Benefits */}
            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-primary mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Zero brokerage fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Direct owner contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Verified properties only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Application Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Fill Application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Owner Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Move-In Process</span>
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

export default ApplyPage;
