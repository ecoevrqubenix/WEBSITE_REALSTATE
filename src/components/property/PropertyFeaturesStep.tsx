
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check } from 'lucide-react';

interface PropertyFeaturesStepProps {
  form: UseFormReturn<any>;
  nextStep: () => void;
  prevStep: () => void;
  selectedAmenities: string[];
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTenants: string[];
  setSelectedTenants: React.Dispatch<React.SetStateAction<string[]>>;
  amenitiesList: string[];
  tenantTypes: string[];
}

const PropertyFeaturesStep: React.FC<PropertyFeaturesStepProps> = ({ 
  form, 
  nextStep, 
  prevStep,
  selectedAmenities,
  setSelectedAmenities,
  selectedTenants,
  setSelectedTenants,
  amenitiesList,
  tenantTypes
}) => {
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const toggleTenantType = (tenantType: string) => {
    if (selectedTenants.includes(tenantType)) {
      setSelectedTenants(selectedTenants.filter(t => t !== tenantType));
    } else {
      setSelectedTenants([...selectedTenants, tenantType]);
    }
  };

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Property Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe your property in detail..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Street Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                  <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="Telangana">Telangana</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <Label className="block mb-3">Amenities</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {amenitiesList.map((amenity) => (
            <div 
              key={amenity}
              onClick={() => toggleAmenity(amenity)}
              className={`p-3 rounded-md border cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition-colors
                ${selectedAmenities.includes(amenity) ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
            >
              {selectedAmenities.includes(amenity) && (
                <Check size={16} className="text-primary" />
              )}
              <span className="capitalize">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="block mb-3">Allowed Tenants</Label>
        <div className="flex flex-wrap gap-3">
          {tenantTypes.map((tenant) => (
            <div 
              key={tenant}
              onClick={() => toggleTenantType(tenant)}
              className={`p-3 rounded-md border cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition-colors
                ${selectedTenants.includes(tenant) ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
            >
              {selectedTenants.includes(tenant) && (
                <Check size={16} className="text-primary" />
              )}
              <span className="capitalize">{tenant}s</span>
            </div>
          ))}
        </div>
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
          type="button" 
          onClick={nextStep}
          className="bg-primary hover:bg-primary/90"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default PropertyFeaturesStep;
