
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PropertyCard from '../components/PropertyCard';
import { propertyListings } from '../utils/mockData';
import { Button } from '@/components/ui/button';
import { Search, Filter, SlidersHorizontal, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyListingPage = () => {
  const [searchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState(false);
  const [filteredListings, setFilteredListings] = useState(propertyListings);
  
  // Filter state
  const [filters, setFilters] = useState({
    bedrooms: searchParams.get('bhk') || '',
    minPrice: '',
    maxPrice: '',
    city: searchParams.get('city') || '',
    propertyType: '',
    furnishing: ''
  });

  // Apply URL params on component mount
  useEffect(() => {
    const city = searchParams.get('city');
    const bhk = searchParams.get('bhk');
    const budget = searchParams.get('budget');
    
    let updatedFilters = { ...filters };
    let shouldFilter = false;
    
    if (city) {
      updatedFilters.city = city;
      shouldFilter = true;
    }
    
    if (bhk) {
      updatedFilters.bedrooms = bhk;
      shouldFilter = true;
    }
    
    if (budget) {
      const [min, max] = budget.split('-');
      if (min) updatedFilters.minPrice = min;
      if (max && max !== '+') updatedFilters.maxPrice = max;
      shouldFilter = true;
    }
    
    if (shouldFilter) {
      setFilters(updatedFilters);
      // Show filters section when parameters are present
      setActiveFilters(true);
      applyFilters(updatedFilters);
    }
  }, [searchParams]);

  const toggleFilters = () => {
    setActiveFilters(!activeFilters);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const applyFilters = (currentFilters: typeof filters) => {
    let filtered = [...propertyListings];
    
    // Filter by bedrooms
    if (currentFilters.bedrooms) {
      if (currentFilters.bedrooms === '0') {
        filtered = filtered.filter(property => property.bedrooms === 0);
      } else if (currentFilters.bedrooms === '4+') {
        filtered = filtered.filter(property => property.bedrooms >= 4);
      } else {
        filtered = filtered.filter(property => 
          property.bedrooms === parseInt(currentFilters.bedrooms));
      }
    }
    
    // Filter by price range
    if (currentFilters.minPrice) {
      filtered = filtered.filter(property => 
        property.rent >= parseInt(currentFilters.minPrice));
    }
    
    if (currentFilters.maxPrice) {
      filtered = filtered.filter(property => 
        property.rent <= parseInt(currentFilters.maxPrice));
    }
    
    // Filter by city
    if (currentFilters.city) {
      filtered = filtered.filter(property => 
        property.location.city === currentFilters.city);
    }
    
    // Filter by property type
    if (currentFilters.propertyType) {
      filtered = filtered.filter(property => 
        property.type === currentFilters.propertyType);
    }
    
    // Filter by furnishing
    if (currentFilters.furnishing) {
      filtered = filtered.filter(property => 
        property.furnishing === currentFilters.furnishing);
    }
    
    setFilteredListings(filtered);
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Applied filters:', filters);
    applyFilters(filters);
  };

  const clearFilters = () => {
    setFilters({
      bedrooms: '',
      minPrice: '',
      maxPrice: '',
      city: '',
      propertyType: '',
      furnishing: ''
    });
    setFilteredListings(propertyListings);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text mb-2">Browse Properties</h1>
            <p className="text-gray-600">{filteredListings.length} properties found</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/owner/list">
              <Button 
                variant="default" 
                className="bg-accent hover:bg-accent/90 text-text flex items-center gap-2"
              >
                <Plus size={18} />
                Add Property
              </Button>
            </Link>

            <Button 
              onClick={toggleFilters}
              variant="outline" 
              className="flex items-center gap-2"
            >
              <SlidersHorizontal size={18} />
              {activeFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
        </div>

        {/* Filters */}
        {activeFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <form onSubmit={handleFilter} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Cities</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Any</option>
                  <option value="0">Studio</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Min ₹"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max ₹"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="furnishing" className="block text-sm font-medium text-gray-700 mb-1">
                  Furnishing
                </label>
                <select
                  id="furnishing"
                  name="furnishing"
                  value={filters.furnishing}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Any</option>
                  <option value="unfurnished">Unfurnished</option>
                  <option value="semi-furnished">Semi-Furnished</option>
                  <option value="fully-furnished">Fully Furnished</option>
                </select>
              </div>

              <div className="md:col-span-3 flex gap-3 justify-end">
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="text-primary"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  <Search size={18} />
                  Apply Filters
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Property Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyListingPage;
