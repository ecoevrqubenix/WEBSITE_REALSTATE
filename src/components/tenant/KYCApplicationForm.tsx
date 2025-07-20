
import React, { useState } from 'react';
import { Upload, FileText, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KYCApplicationFormProps {
  onSubmit: (data: ApplicationData) => void;
}

interface ApplicationData {
  documents: FileList | null;
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    occupation: string;
    monthlyIncome: string;
  };
}

const KYCApplicationForm: React.FC<KYCApplicationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ApplicationData>({
    documents: null,
    personalInfo: {
      name: '',
      phone: '',
      email: '',
      occupation: '',
      monthlyIncome: ''
    }
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, documents: files });
      setUploadedFiles(Array.from(files).map(file => file.name));
    }
  };

  const handlePersonalInfoChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [field]: value }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 mb-6">
        <Shield size={20} className="text-primary" />
        <h2 className="text-xl font-semibold">Submit Your Application</h2>
      </div>

      <div className="mb-6 p-4 bg-green-50 rounded-md border border-green-200">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-600" />
          <span className="text-green-800 font-medium">Zero Brokerage Guarantee</span>
        </div>
        <p className="text-green-700 text-sm mt-1">Direct contact with property owners • No hidden charges</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.personalInfo.name}
                onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
              <input
                type="text"
                value={formData.personalInfo.occupation}
                onChange={(e) => handlePersonalInfoChange('occupation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your profession"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income</label>
              <select
                value={formData.personalInfo.monthlyIncome}
                onChange={(e) => handlePersonalInfoChange('monthlyIncome', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select income range</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                <option value="200000+">₹2,00,000+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div>
          <h3 className="text-lg font-medium mb-4">Upload KYC Documents</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload size={32} className="mx-auto text-gray-400 mb-2" />
            <label className="cursor-pointer">
              <span className="text-primary font-medium">Upload Documents</span>
              <span className="text-gray-500"> or drag and drop</span>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <p className="text-xs text-gray-500 mt-2">
              Upload Aadhaar, PAN, Salary Slip, Bank Statement (PDF, JPG, PNG)
            </p>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
              <div className="space-y-2">
                {uploadedFiles.map((fileName, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText size={14} />
                    <span>{fileName}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default KYCApplicationForm;
