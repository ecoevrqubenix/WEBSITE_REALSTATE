import React from 'react';

interface PropertyFormStepsProps {
  step: number;
  totalSteps: number;
}

const PropertyFormSteps: React.FC<PropertyFormStepsProps> = ({ step, totalSteps }) => {
  return (
    <div className="flex justify-between mb-10">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className="flex items-center flex-1">
          {/* Step indicator */}
          <div className={`flex flex-col items-center ${step >= index + 1 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
              ${step >= index + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
              {index + 1}
            </div>
            <span className="text-sm">
              {index === 0 ? 'Basic Details' : index === 1 ? 'Property Features' : 'Photos & Finish'}
            </span>
          </div>

          {/* Connecting line between steps (except after the last step) */}
          {index < totalSteps - 1 && (
            <div className="flex-1 flex items-center justify-center">
              <div className={`h-1 w-full ${step > index + 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyFormSteps;
