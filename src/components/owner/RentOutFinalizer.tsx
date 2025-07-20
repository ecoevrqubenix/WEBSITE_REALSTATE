
import React, { useState } from 'react';
import { CheckCircle, Home, User, Calendar, DollarSign, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RentalDetails {
  propertyTitle: string;
  tenantName: string;
  monthlyRent: string;
  securityDeposit: string;
  startDate: string;
  endDate: string;
}

interface RentOutFinalizerProps {
  rentalDetails: RentalDetails;
  onFinalize: () => void;
}

const RentOutFinalizer: React.FC<RentOutFinalizerProps> = ({ 
  rentalDetails, 
  onFinalize 
}) => {
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [depositReceived, setDepositReceived] = useState(false);
  const [keysHandedOver, setKeysHandedOver] = useState(false);

  const allStepsCompleted = agreementSigned && depositReceived && keysHandedOver;

  const steps = [
    {
      id: 'agreement',
      title: 'Rental Agreement Signed',
      description: 'Both parties have signed the rental agreement',
      completed: agreementSigned,
      onChange: setAgreementSigned,
      icon: <FileText size={20} />
    },
    {
      id: 'deposit',
      title: 'Security Deposit Received',
      description: `₹${rentalDetails.securityDeposit} received from tenant`,
      completed: depositReceived,
      onChange: setDepositReceived,
      icon: <DollarSign size={20} />
    },
    {
      id: 'keys',
      title: 'Keys Handed Over',
      description: 'Property keys given to tenant',
      completed: keysHandedOver,
      onChange: setKeysHandedOver,
      icon: <Home size={20} />
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b bg-green-50">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle size={20} className="text-green-600" />
          <h2 className="text-xl font-semibold text-green-800">Finalize Rental</h2>
        </div>
        <p className="text-green-700">Complete the final steps to mark your property as rented</p>
      </div>

      <div className="p-6">
        {/* Rental Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Rental Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Property:</span>
              <p className="font-medium">{rentalDetails.propertyTitle}</p>
            </div>
            <div>
              <span className="text-gray-500">Tenant:</span>
              <p className="font-medium">{rentalDetails.tenantName}</p>
            </div>
            <div>
              <span className="text-gray-500">Monthly Rent:</span>
              <p className="font-medium">₹{rentalDetails.monthlyRent}</p>
            </div>
            <div>
              <span className="text-gray-500">Security Deposit:</span>
              <p className="font-medium">₹{rentalDetails.securityDeposit}</p>
            </div>
            <div>
              <span className="text-gray-500">Lease Start:</span>
              <p className="font-medium">{rentalDetails.startDate}</p>
            </div>
            <div>
              <span className="text-gray-500">Lease End:</span>
              <p className="font-medium">{rentalDetails.endDate}</p>
            </div>
          </div>
        </div>

        {/* Completion Steps */}
        <div className="space-y-4 mb-6">
          <h3 className="font-semibold">Completion Checklist</h3>
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                step.completed 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => step.onChange(!step.completed)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    step.completed 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  {step.completed && <CheckCircle size={16} />}
                </button>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary">{step.icon}</span>
                    <h4 className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-900'}`}>
                      {step.title}
                    </h4>
                  </div>
                  <p className={`text-sm ${step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Actions */}
        <div className="space-y-4">
          {allStepsCompleted ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
              <div className="flex items-center gap-2 text-green-800">
                <CheckCircle size={20} />
                <span className="font-medium">Ready to finalize!</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                All steps completed. Click below to mark your property as rented.
              </p>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
              <p className="text-yellow-800 text-sm">
                Please complete all steps above before finalizing the rental.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
            >
              Contact Tenant
            </Button>
            <Button 
              onClick={onFinalize}
              disabled={!allStepsCompleted}
              className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50"
            >
              Finalize Rental
            </Button>
          </div>
        </div>

        {/* Success Message */}
        {allStepsCompleted && (
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-medium text-primary mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your property will be marked as "Rented" on the platform</li>
              <li>• Both you and the tenant will receive confirmation emails</li>
              <li>• Property listing will be temporarily hidden from search</li>
              <li>• You can manage this rental from your dashboard</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentOutFinalizer;
