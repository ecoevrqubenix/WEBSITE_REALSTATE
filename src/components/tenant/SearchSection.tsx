
import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchSectionProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  city: string;
  budgetRange: string;
  bhk: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    city: '',
    budgetRange: '',
    bhk: ''
  });

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Kolkata'];
  const budgetRanges = ['10000-20000', '20000-30000', '30000-50000', '50000-100000', '100000+'];
  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK'];

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border relative z-30">
      <div className="flex items-center gap-2 mb-4">
        <Search size={20} className="text-primary" />
        <h2 className="text-xl font-semibold">Find Your Perfect Home</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <select
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
          <select
            value={filters.budgetRange}
            onChange={(e) => setFilters({ ...filters, budgetRange: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Budget</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>₹{range.replace('-', ' - ₹')}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">BHK</label>
          <select
            value={filters.bhk}
            onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select BHK</option>
            {bhkOptions.map(bhk => (
              <option key={bhk} value={bhk}>{bhk}</option>
            ))}
          </select>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary/90">
        <Search size={16} className="mr-2" />
        Search Properties
      </Button>

      <div className="mt-4 p-3 bg-accent/10 rounded-md">
        <p className="text-sm text-primary font-medium">✨ Zero Brokerage • Direct Owner Contact • Verified Properties</p>
      </div>
    </div>
  );
};

export default SearchSection;
