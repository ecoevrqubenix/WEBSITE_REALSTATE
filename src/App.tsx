
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PropertyListingPage from "./pages/PropertyListingPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AddPropertyPage from "./pages/AddPropertyPage";
import TenantDashboard from "./pages/TenantDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import { AuthProvider } from "./context/authContext";

// Tenant pages
import SearchPage from "./pages/tenant/SearchPage";
import ApplyPage from "./pages/tenant/ApplyPage";
import MoveInPage from "./pages/tenant/MoveInPage";

// Owner pages
import ListPage from "./pages/owner/ListPage";
import ApplicationsPage from "./pages/owner/ApplicationsPage";
import FinalizePage from "./pages/owner/FinalizePage";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/properties" element={<PropertyListingPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/add-property" element={<AddPropertyPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<TenantDashboard />} />
            <Route path="/owner-dashboard" element={<OwnerDashboard />} />
            
            {/* Tenant Flow Routes */}
            <Route path="/tenant/search" element={<SearchPage />} />
            <Route path="/tenant/apply" element={<ApplyPage />} />
            <Route path="/tenant/move-in" element={<MoveInPage />} />
            
            {/* Owner Flow Routes - Use AddPropertyPage for consistency */}
            <Route path="/owner/list" element={<AddPropertyPage />} />
            <Route path="/owner/applications" element={<ApplicationsPage />} />
            <Route path="/owner/finalize" element={<FinalizePage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
