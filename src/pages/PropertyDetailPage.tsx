
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { propertyListings } from '../utils/mockData';
import { 
  MapPin, 
  BedDouble, 
  Bath, 
  Square, 
  Calendar, 
  Home, 
  Check, 
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


      useEffect(() => {
      const fetchProperty = async () => {
        try {
          const res = await api.get(`/properties/${id}`);
          setProperty(res.data);
        } catch (err) {
          console.error('Failed to fetch property:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchProperty();
    }, [id]);

  
  if (!property) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to Properties
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/properties" className="text-gray-500 hover:text-primary">Properties</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary">{property.title}</span>
        </div>

        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-text mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-1" />
              <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-3xl font-bold text-primary">₹{property.rent}<span className="text-gray-500 text-lg font-normal">/month</span></div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src={property.images[currentImageIndex]} 
              alt={`Property image ${currentImageIndex + 1}`} 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Property Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Property Type</span>
                  <div className="flex items-center mt-1">
                    <Home size={18} className="text-primary mr-2" />
                    <span className="font-medium capitalize">{property.type}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Bedrooms</span>
                  <div className="flex items-center mt-1">
                    <BedDouble size={18} className="text-primary mr-2" />
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Bathrooms</span>
                  <div className="flex items-center mt-1">
                    <Bath size={18} className="text-primary mr-2" />
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Area</span>
                  <div className="flex items-center mt-1">
                    <Square size={18} className="text-primary mr-2" />
                    <span className="font-medium">{property.area} sq ft</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Deposit</span>
                  <span className="font-medium">₹{property.deposit}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Furnishing</span>
                  <span className="font-medium capitalize">{property.furnishing}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Listed On</span>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="font-medium">{property.listedOn}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-gray-600 mb-6">{property.description}</p>

              <h3 className="text-xl font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span className="capitalize">{amenity}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Tenant Preferences</h3>
              <div className="flex flex-wrap gap-4">
                {['bachelor', 'family', 'couple'].map(tenant => (
                  <div 
                    key={tenant} 
                    className={`flex items-center ${property.allowedTenants.includes(tenant as any) 
                      ? 'text-gray-800' 
                      : 'text-gray-400 line-through'}`}
                  >
                    {property.allowedTenants.includes(tenant as any) 
                      ? <Check size={16} className="text-green-500 mr-2" /> 
                      : <X size={16} className="text-red-500 mr-2" />}
                    <span className="capitalize">{tenant}s</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section - Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="bg-neutral h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={36} className="mx-auto mb-2 text-primary" />
                  <p>{property.location.address}</p>
                  <p>{property.location.city}, {property.location.state}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Contact Owner</h3>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                  {property.owner.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{property.owner.name}</h4>
                  <p className="text-gray-500 text-sm">Property Owner</p>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 mb-3 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Message Owner
              </Button>

              <Button variant="outline" className="w-full">
                View Phone Number
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium mb-2">Quick Application</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Express interest in this property and the owner will contact you.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-text">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties - Just a placeholder section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We would fetch similar properties here - showing just a placeholder */}
            <div className="bg-neutral h-64 rounded-lg flex items-center justify-center text-center p-4">
              <p className="text-gray-500">Similar properties will appear here</p>
            </div>
            <div className="bg-neutral h-64 rounded-lg flex items-center justify-center text-center p-4">
              <p className="text-gray-500">Similar properties will appear here</p>
            </div>
            <div className="bg-neutral h-64 rounded-lg flex items-center justify-center text-center p-4">
              <p className="text-gray-500">Similar properties will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyDetailPage;
