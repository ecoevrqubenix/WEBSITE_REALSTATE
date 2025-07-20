
import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';

interface PhotosFinishStepProps {
  prevStep: () => void;
  selectedImages: string[];
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotosFinishStep: React.FC<PhotosFinishStepProps> = ({ 
  prevStep, 
  selectedImages, 
  handleImageUpload 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <Label className="block mb-3">Property Photos</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {selectedImages.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-md overflow-hidden">
              <img src={image} alt={`Property ${index+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <label className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center p-4">
              <Plus size={24} className="text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">Add Photos</span>
            </div>
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <p className="text-sm text-gray-500">Upload at least 4 photos of your property. First image will be the main image.</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <h3 className="font-semibold text-yellow-800">Before Publishing:</h3>
        <ul className="mt-2 space-y-1 text-sm text-yellow-700">
          <li>• Make sure all information is accurate</li>
          <li>• Uploaded photos are clear and represent the property well</li>
          <li>• You have included all important amenities</li>
          <li>• Rent and deposit amounts are correctly mentioned</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline"
          onClick={prevStep}
        >
          Previous Step
        </Button>
        <Button 
          type="submit"
          className="bg-primary hover:bg-primary/90"
        >
          Publish Property
        </Button>
      </div>
    </div>
  );
};

export default PhotosFinishStep;
