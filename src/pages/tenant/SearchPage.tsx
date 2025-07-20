
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import SearchSection from '../../components/tenant/SearchSection';
import PropertyCard from '../../components/PropertyCard';
import { propertyListings } from '../../utils/mockData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import api from '@/lib/axios';


interface SearchFilters {
  city: string;
  budgetRange: string;
  bhk: string;
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState(propertyListings);
  const [isSearched, setIsSearched] = useState(false);

 const handleSearch = async (filters: SearchFilters) => {
  const [minRent, maxRent] = filters.budgetRange.split('-').map(Number);
  const bhk = parseInt(filters.bhk);

  try {
    const res = await api.get('/properties', {
      params: {
        city: filters.city,
        minRent,
        maxRent,
        bedrooms: bhk,
        page: 1,
        limit: 20,
      }
    });
    console.log(res);

    const properties = Array.isArray(res.data) 
      ? res.data 
      : res.data.data; // fallback to res.data.data if paginated

    setSearchResults(properties);
  } catch (err) {
    console.error('Failed to fetch properties:', err);
    setSearchResults([]); // fallback to avoid map error
  } finally {
    setIsSearched(true);
  }
};



  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">Find Your Perfect Rental Home</h1>
          <p className="text-gray-600">Discover thousands of verified properties with zero brokerage</p>
        </div>

        <SearchSection onSearch={handleSearch} />

        {isSearched && (
          <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {searchResults.length} Properties Found
              </h2>
              <div className="text-sm text-gray-600">
                Sorted by: Relevance
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(property => (
                <div key={property.id} className="relative">
                  <PropertyCard property={property} />
                  <div className="mt-3">
                    <Link to="/tenant/apply">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Apply Now - Zero Brokerage
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">No properties found</div>
                <p className="text-gray-600">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        )}

        {!isSearched && (
          <div className="mt-10 text-center py-12">
            <div className="text-gray-400 text-lg mb-2">Start your search above</div>
            <p className="text-gray-600">Use the filters to find properties that match your needs</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
