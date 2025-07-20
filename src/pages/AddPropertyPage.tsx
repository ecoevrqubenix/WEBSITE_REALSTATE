
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import PropertyFormSteps from '@/components/property/PropertyFormSteps';
import BasicDetailsStep from '@/components/property/BasicDetailsStep';
import PropertyFeaturesStep from '@/components/property/PropertyFeaturesStep';
import PhotosFinishStep from '@/components/property/PhotosFinishStep';
import { ArrowLeft } from 'lucide-react';
import api from '@/lib/axios';
import { useAuth } from '../context/authContext';
import axios from 'axios';



interface FormValues {
  title: string;
  type: 'apartment' | 'house' | 'villa' | 'penthouse';
  rent: number;
  deposit: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnishing: 'unfurnished' | 'semi-furnished' | 'fully-furnished';
  description: string;
  address: string;
  city: string;
  state: string;
  amenities: string[];
  allowedTenants: ('bachelor' | 'family' | 'couple')[];
}

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTenants, setSelectedTenants] = useState<string[]>([]);
  
  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      type: 'apartment',
      rent: 0,
      deposit: 0,
      bedrooms: 1,
      bathrooms: 1,
      area: 0,
      furnishing: 'unfurnished',
      description: '',
      address: '',
      city: '',
      state: '',
      amenities: [],
      allowedTenants: []
    }
  });

  const amenitiesList = [
    "gym", "pool", "parking", "security", "elevator", "wifi", 
    "garden", "air conditioning", "laundry", "balcony", "terrace",
    "smart home", "study desk", "concierge", "fireplace"
  ];

  const tenantTypes = [
    "bachelor", "family", "couple"
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = (event) => {
          if (event.target?.result) {
            newImages.push(event.target.result as string);
            if (newImages.length === files.length) {
              setSelectedImages([...selectedImages, ...newImages]);
            }
          }
        };
        
        reader.readAsDataURL(file);
      }
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const { token } = useAuth();

 const onSubmit = async (data: FormValues) => {
  data.amenities = selectedAmenities;
  data.allowedTenants = selectedTenants as ('bachelor' | 'family' | 'couple')[];

  const token = localStorage.getItem("token");
  console.log(token)

  const formData = {
    ...data,
    amenities: JSON.stringify(data.amenities),
    allowedTenants: JSON.stringify(data.allowedTenants),
  };

  try {
    const response = await axios.post(
      'http://localhost:4000/api/properties',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast({
      title: "Property Added Successfully!",
      description: "Your property has been added and is now visible to potential tenants.",
    });

    navigate('/properties');
  } catch (error: any) {
    console.error('Property creation failed:', error);
    toast({
      title: "Error",
      description: error?.response?.data?.error || "Something went wrong",
    });
  }
};


  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
          
          <h1 className="text-3xl font-bold text-text mb-2">Add Your Property</h1>
          <p className="text-gray-600">Fill in the details below to add your property to our platform.</p>
        </div>

        {/* Progress Steps */}
        <PropertyFormSteps step={step} totalSteps={3} />

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <BasicDetailsStep
                form={form}
                nextStep={nextStep}
              />
            )}

            {/* Step 2: Property Features */}
            {step === 2 && (
              <PropertyFeaturesStep
                form={form}
                nextStep={nextStep}
                prevStep={prevStep}
                selectedAmenities={selectedAmenities}
                setSelectedAmenities={setSelectedAmenities}
                selectedTenants={selectedTenants}
                setSelectedTenants={setSelectedTenants}
                amenitiesList={amenitiesList}
                tenantTypes={tenantTypes}
              />
            )}

            {/* Step 3: Photos & Finish */}
            {step === 3 && (
              <PhotosFinishStep
                prevStep={prevStep}
                selectedImages={selectedImages}
                handleImageUpload={handleImageUpload}
              />
            )}
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default AddPropertyPage;
