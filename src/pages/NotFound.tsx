
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral p-4">
      <div className="text-center max-w-md">
        <div className="text-primary text-8xl font-bold mb-4">404</div>
        <h1 className="text-3xl font-bold text-text mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page might have been removed, renamed, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 min-w-[160px] flex items-center justify-center gap-2">
              <Home size={16} />
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="min-w-[160px] flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
