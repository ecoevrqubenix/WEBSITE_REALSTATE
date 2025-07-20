
import React, { useState } from 'react';
import { CheckCircle, Circle, MessageCircle, FileText, Key, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: React.ReactNode;
}

const MoveInChecklist: React.FC = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    {
      id: '1',
      title: 'Connect with Owner',
      description: 'Contact your property owner to discuss move-in details',
      completed: false,
      icon: <MessageCircle size={20} />
    },
    {
      id: '2',
      title: 'Finalize Agreement',
      description: 'Review and sign the rental agreement',
      completed: false,
      icon: <FileText size={20} />
    },
    {
      id: '3',
      title: 'Security Deposit',
      description: 'Transfer security deposit as per agreement',
      completed: false,
      icon: <Circle size={20} />
    },
    {
      id: '4',
      title: 'Get Keys',
      description: 'Collect property keys from the owner',
      completed: false,
      icon: <Key size={20} />
    },
    {
      id: '5',
      title: 'Move In',
      description: 'Complete your move-in and enjoy your new home!',
      completed: false,
      icon: <Home size={20} />
    }
  ]);

  const toggleItem = (id: string) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklistItems.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklistItems.length) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Move-In Checklist</h2>
        <p className="text-gray-600">Follow these steps to complete your rental process</p>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{completedCount}/{checklistItems.length} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {checklistItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`p-4 rounded-lg border transition-all duration-200 ${
              item.completed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <button
                onClick={() => toggleItem(item.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  item.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'border-gray-300 hover:border-primary'
                }`}
              >
                {item.completed && <CheckCircle size={16} />}
              </button>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary">{item.icon}</span>
                  <h3 className={`font-medium ${item.completed ? 'text-green-700' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`text-sm ${item.completed ? 'text-green-600' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              
              <div className="text-sm font-medium">
                Step {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      {completedCount === checklistItems.length && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-800">
            <CheckCircle size={20} />
            <span className="font-medium">Congratulations! You've completed all steps.</span>
          </div>
          <p className="text-green-700 text-sm mt-1">Welcome to your new home!</p>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <Button variant="outline" className="flex-1">
          Contact Support
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary/90">
          <MessageCircle size={16} className="mr-2" />
          Chat with Owner
        </Button>
      </div>
    </div>
  );
};

export default MoveInChecklist;
