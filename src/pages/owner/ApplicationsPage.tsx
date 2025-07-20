
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import TenantLeadsViewer from '../../components/owner/TenantLeadsViewer';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface TenantLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  occupation: string;
  monthlyIncome: string;
  appliedDate: string;
  status: 'pending' | 'shortlisted' | 'rejected' | 'approved';
  propertyTitle: string;
  avatar: string;
}

const ApplicationsPage = () => {
  const navigate = useNavigate();
  
  const [leads, setLeads] = useState<TenantLead[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      occupation: 'Software Engineer',
      monthlyIncome: '80,000',
      appliedDate: '2024-01-15',
      status: 'pending',
      propertyTitle: 'Modern 2BHK Apartment',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '2',
      name: 'Amit Kumar',
      phone: '+91 87654 32109',
      email: 'amit.kumar@email.com',
      occupation: 'Marketing Manager',
      monthlyIncome: '65,000',
      appliedDate: '2024-01-14',
      status: 'shortlisted',
      propertyTitle: 'Spacious 3BHK Villa',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '3',
      name: 'Sneha Patel',
      phone: '+91 76543 21098',
      email: 'sneha.patel@email.com',
      occupation: 'Doctor',
      monthlyIncome: '1,20,000',
      appliedDate: '2024-01-13',
      status: 'pending',
      propertyTitle: 'Modern 2BHK Apartment',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ]);

  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleStatusChange = (leadId: string, newStatus: TenantLead['status']) => {
    setLeads(prevLeads =>
      prevLeads.map(lead =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );

    // If approved, navigate to finalize page
    if (newStatus === 'approved') {
      navigate('/owner/finalize');
    }
  };

  const handleMessage = (leadId: string) => {
    console.log('Message tenant:', leadId);
    // Here you would typically open a chat or redirect to messaging
  };

  const filteredLeads = statusFilter === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === statusFilter);

  const getStatusCounts = () => {
    return {
      all: leads.length,
      pending: leads.filter(l => l.status === 'pending').length,
      shortlisted: leads.filter(l => l.status === 'shortlisted').length,
      approved: leads.filter(l => l.status === 'approved').length,
      rejected: leads.filter(l => l.status === 'rejected').length
    };
  };

  const statusCounts = getStatusCounts();

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
          
          <h1 className="text-3xl font-bold text-text mb-2">Tenant Applications</h1>
          <p className="text-gray-600">Review and manage applications for your properties</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-500" />
                <span className="text-sm font-medium">Filter by status:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All', count: statusCounts.all },
                  { key: 'pending', label: 'Pending', count: statusCounts.pending },
                  { key: 'shortlisted', label: 'Shortlisted', count: statusCounts.shortlisted },
                  { key: 'approved', label: 'Approved', count: statusCounts.approved },
                  { key: 'rejected', label: 'Rejected', count: statusCounts.rejected }
                ].map(({ key, label, count }) => (
                  <button
                    key={key}
                    onClick={() => setStatusFilter(key)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      statusFilter === key
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label} ({count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Applications List */}
          <TenantLeadsViewer
            leads={filteredLeads}
            onStatusChange={handleStatusChange}
            onMessage={handleMessage}
          />

          {/* Quick Actions */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <div className="text-2xl">📝</div>
                <span className="text-sm">Create Rental Agreement</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <div className="text-2xl">💬</div>
                <span className="text-sm">Bulk Message Applicants</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <div className="text-2xl">📊</div>
                <span className="text-sm">View Analytics</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationsPage;
