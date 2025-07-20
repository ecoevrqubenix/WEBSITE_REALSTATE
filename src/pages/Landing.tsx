import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import BenefitCard from '../components/BenefitCard';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';
import CityCard from '../components/CityCard';
import { benefits, cities, propertyListings, testimonials } from '../utils/mockData';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import api from '../lib/axios';

interface SearchFilters {
  city: string;
  budgetRange: string;
  bhk: string;
}

const Landing = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(propertyListings);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async (filters: SearchFilters) => {
      const [minRent, maxRent] = filters.budgetRange.split('-').map(Number);
      const bhkNumber = parseInt(filters.bhk);

      try {
        const response = await api.get('/properties', {
          params: {
            city: filters.city,
            minRent,
            maxRent,
            bedrooms: bhkNumber,
            page: 1,
            limit: 12,
          },
        });

        setSearchResults(response.data); // Use response.data.data if paginated
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]); // fallback to empty results
      } finally {
        setIsSearched(true);
      }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero onSearch={handleSearch} searchResults={searchResults} isSearched={isSearched} />

      {/* Benefits Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Why Choose <span className="text-primary">HomeEase</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(benefit => (
              <BenefitCard
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-text">Featured Properties</h2>
            <Link to="/properties">
              <Button variant="link" className="text-primary flex items-center gap-1">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyListings.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text text-center mb-12">Explore Properties by Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.slice(0, 6).map(city => (
              <CityCard
                key={city.name}
                name={city.name}
                state={city.state}
                count={city.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy tenants who found their ideal home with zero brokerage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent/90 text-text font-medium"
              onClick={() => navigate('/properties')}
            >
              Browse Properties
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/owner/list')}
            >
              Add Property
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;
