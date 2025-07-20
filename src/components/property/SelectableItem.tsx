
import React from 'react';
import { Check } from 'lucide-react';

interface SelectableItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableItem: React.FC<SelectableItemProps> = ({ label, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-3 rounded-md border cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition-colors
        ${selected ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
    >
      {selected && <Check size={16} className="text-primary" />}
      <span className="capitalize">{label}</span>
    </div>
  );
};

export default SelectableItem;
