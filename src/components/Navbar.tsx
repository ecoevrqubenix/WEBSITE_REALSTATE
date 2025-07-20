
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<'tenant' | 'owner'>('tenant');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserTypeToggle = () => {
    const newUserType = userType === 'tenant' ? 'owner' : 'tenant';
    setUserType(newUserType);
    
    // Navigate to appropriate page based on user type
    if (newUserType === 'owner') {
      navigate('/owner/list');
    } else {
      navigate('/tenant/search');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">HomeEase</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/properties" className="text-text hover:text-primary transition-colors">
            Browse Properties
          </Link>
          <Link to="/how-it-works" className="text-text hover:text-primary transition-colors">
            How It Works
          </Link>
          <button
            onClick={handleUserTypeToggle}
            className="text-text hover:text-primary transition-colors"
          >
            {userType === 'tenant' ? 'For Owners' : 'For Tenants'}
          </button>
          <Link to="/owner/list" className="text-text hover:text-primary transition-colors">
            Add Property
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-primary">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/properties"
                className="text-text hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Browse Properties
              </Link>
              <Link
                to="/how-it-works"
                className="text-text hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <button
                onClick={() => {
                  handleUserTypeToggle();
                  toggleMenu();
                }}
                className="text-text hover:text-primary transition-colors text-left py-2"
              >
                {userType === 'tenant' ? 'For Owners' : 'For Tenants'}
              </button>
              <Link
                to="/owner/list"
                className="text-text hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Add Property
              </Link>
              <hr className="my-2" />
              <Link
                to="/login"
                className="text-text hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-text hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
