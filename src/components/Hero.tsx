import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import SearchSection from './tenant/SearchSection';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

interface SearchFilters {
  city: string;
  budgetRange: string;
  bhk: string;
}

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
  searchResults: any[];
  isSearched: boolean;
}

const Hero: React.FC<HeroProps> = ({ onSearch, searchResults, isSearched }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560185127-6ed189bf02f4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Find Your Perfect Home, <span className="text-accent">Zero Brokerage</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Connect directly with verified property owners. Save thousands in brokerage fees.
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-text font-medium" onClick={() => navigate('/properties')}>
              Browse Properties
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" onClick={() => navigate('/owner/list')}>
              Add Property
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-20">
          {/* Use search section passed down search handler */}
          <SearchSection onSearch={onSearch} />
        </div>
      </div>

      {/* Search Results Section */}
      {isSearched && (
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-text">
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
        </div>
      )}
    </div>
  );
};

export default Hero;
