
import React, { useState } from 'react';
import { Upload, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyData {
  title: string;
  location: string;
  rent: string;
  bhk: string;
  images: FileList | null;
  description: string;
}

interface QuickListFormProps {
  onSubmit: (data: PropertyData) => void;
}

const QuickListForm: React.FC<QuickListFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PropertyData>({
    title: '',
    location: '',
    rent: '',
    bhk: '',
    images: null,
    description: ''
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleInputChange = (field: keyof PropertyData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, images: files });
      setUploadedImages(Array.from(files).map(file => file.name));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 mb-6">
        <Home size={20} className="text-primary" />
        <h2 className="text-xl font-semibold">List Your Property</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. Spacious 2BHK in Bandra"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent</label>
            <input
              type="number"
              value={formData.rent}
              onChange={(e) => handleInputChange('rent', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter amount in ₹"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Area, City"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">BHK</label>
            <select
              value={formData.bhk}
              onChange={(e) => handleInputChange('bhk', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="">Select BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4+ BHK</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Describe your property features, amenities, nearby facilities..."
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Images</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload size={32} className="mx-auto text-gray-400 mb-2" />
            <label className="cursor-pointer">
              <span className="text-primary font-medium">Upload Images</span>
              <span className="text-gray-500"> or drag and drop</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <p className="text-xs text-gray-500 mt-2">
              Upload at least 3 images (JPG, PNG, max 5MB each)
            </p>
          </div>
          
          {uploadedImages.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images:</h4>
              <div className="flex flex-wrap gap-2">
                {uploadedImages.map((fileName, index) => (
                  <span key={index} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {fileName}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Benefits Highlight */}
        <div className="bg-green-50 p-4 rounded-md border border-green-200">
          <h3 className="text-green-800 font-medium mb-2">Why list with us?</h3>
          <ul className="text-green-700 text-sm space-y-1">
            <li>• Zero listing fees</li>
            <li>• Direct tenant contact</li>
            <li>• Quick verification process</li>
            <li>• Maximum property visibility</li>
          </ul>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          List Property - Free
        </Button>
      </form>
    </div>
  );
};

export default QuickListForm;
