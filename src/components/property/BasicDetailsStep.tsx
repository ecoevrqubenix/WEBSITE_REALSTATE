
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
import { ArrowRight } from 'lucide-react';

interface BasicDetailsStepProps {
  form: UseFormReturn<any>;
  nextStep: () => void;
}

const BasicDetailsStep: React.FC<BasicDetailsStepProps> = ({ form, nextStep }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Property Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Spacious 2BHK in Central Location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="furnishing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Furnishing</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select furnishing type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="unfurnished">Unfurnished</SelectItem>
                  <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                  <SelectItem value="fully-furnished">Fully-Furnished</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          control={form.control}
          name="rent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Rent (₹)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deposit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Security Deposit (₹)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area (sq ft)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bedrooms</FormLabel>
              <Select 
                onValueChange={(value) => field.onChange(parseInt(value))} 
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of bedrooms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">Studio</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4 Bedrooms</SelectItem>
                  <SelectItem value="5">5+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bathrooms</FormLabel>
              <Select 
                onValueChange={(value) => field.onChange(parseFloat(value))} 
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of bathrooms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1 Bathroom</SelectItem>
                  <SelectItem value="1.5">1.5 Bathrooms</SelectItem>
                  <SelectItem value="2">2 Bathrooms</SelectItem>
                  <SelectItem value="2.5">2.5 Bathrooms</SelectItem>
                  <SelectItem value="3">3 Bathrooms</SelectItem>
                  <SelectItem value="3.5">3.5 Bathrooms</SelectItem>
                  <SelectItem value="4">4+ Bathrooms</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-end">
        <Button 
          type="button" 
          onClick={nextStep}
          className="bg-primary hover:bg-primary/90 flex items-center gap-2"
        >
          Next Step
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default BasicDetailsStep;
