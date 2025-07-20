
import React from 'react';
import { Wallet, Check, MessageCircle, Video } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'wallet':
        return <Wallet className="h-8 w-8 text-accent" />;
      case 'check':
        return <Check className="h-8 w-8 text-accent" />;
      case 'message-circle':
        return <MessageCircle className="h-8 w-8 text-accent" />;
      case 'video':
        return <Video className="h-8 w-8 text-accent" />;
      default:
        return <Check className="h-8 w-8 text-accent" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-50 p-3 rounded-full mb-4">
          {getIcon()}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
