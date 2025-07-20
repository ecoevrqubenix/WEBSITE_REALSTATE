
import React, { useState } from 'react';
import { MessageCircle, User, Phone, Mail, Eye, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface TenantLeadsViewerProps {
  leads: TenantLead[];
  onStatusChange: (leadId: string, newStatus: TenantLead['status']) => void;
  onMessage: (leadId: string) => void;
}

const TenantLeadsViewer: React.FC<TenantLeadsViewerProps> = ({ 
  leads, 
  onStatusChange, 
  onMessage 
}) => {
  const [selectedLead, setSelectedLead] = useState<TenantLead | null>(null);

  const getStatusColor = (status: TenantLead['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2 mb-2">
          <User size={20} className="text-primary" />
          <h2 className="text-xl font-semibold">Tenant Applications</h2>
        </div>
        <p className="text-gray-600">Review and manage applications for your properties</p>
      </div>

      <div className="divide-y">
        {leads.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <User size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">No applications yet</h3>
            <p>Applications will appear here once tenants apply for your properties.</p>
          </div>
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={lead.avatar} 
                    alt={lead.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{lead.name}</h3>
                      <p className="text-gray-600 text-sm">Applied for: {lead.propertyTitle}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-400" />
                        <span>{lead.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-gray-400" />
                        <span>{lead.email}</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Occupation: </span>
                        <span className="font-medium">{lead.occupation}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Income: </span>
                        <span className="font-medium">₹{lead.monthlyIncome}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Applied on {lead.appliedDate}</span>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <Eye size={14} className="mr-1" />
                        View Details
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onMessage(lead.id)}
                      >
                        <MessageCircle size={14} className="mr-1" />
                        Message
                      </Button>

                      {lead.status === 'pending' && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onStatusChange(lead.id, 'shortlisted')}
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            <CheckCircle size={14} className="mr-1" />
                            Shortlist
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onStatusChange(lead.id, 'rejected')}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <X size={14} className="mr-1" />
                            Reject
                          </Button>
                        </>
                      )}

                      {lead.status === 'shortlisted' && (
                        <Button
                          size="sm"
                          onClick={() => onStatusChange(lead.id, 'approved')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Approve
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Application Details</h3>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedLead.avatar} 
                  alt={selectedLead.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{selectedLead.name}</h4>
                  <p className="text-gray-600 text-sm">{selectedLead.occupation}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <p className="font-medium">{selectedLead.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="font-medium">{selectedLead.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Income:</span>
                  <p className="font-medium">₹{selectedLead.monthlyIncome}</p>
                </div>
                <div>
                  <span className="text-gray-500">Applied:</span>
                  <p className="font-medium">{selectedLead.appliedDate}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => onMessage(selectedLead.id)}
                >
                  Message
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => onStatusChange(selectedLead.id, 'shortlisted')}
                >
                  Shortlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantLeadsViewer;
