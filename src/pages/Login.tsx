import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Building, Check } from 'lucide-react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'tenant' | 'owner'>('tenant');

// inside the Login component
const { login } = useAuth();
const navigate = useNavigate();
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post(`http://localhost:4001/api/auth/login`, {
      email,
      password,
      userType,
    });

    const token = response.data.token;

    // ✅ Save token to localStorage
    localStorage.setItem("token", token);

    alert('Login successful!');
    navigate(userType === 'owner' ? '/owner/dashboard' : '/tenant/dashboard');
  } catch (err: any) {
    console.error(err);
    alert(err?.response?.data?.message || 'Login failed');
  }
};


  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <div className="flex-grow container mx-auto py-12 px-4 flex flex-col md:flex-row md:items-center md:justify-center">
        
        {/* Left column: Login Form */}
        <div className="md:w-1/2 md:max-w-md bg-white p-8 rounded-lg shadow-md">
          <Link to="/" className="inline-flex items-center text-primary mb-6 hover:text-primary/80">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-text mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue to your account</p>
          </div>

          {/* User Type Toggle */}
          <div className="flex p-1 border border-gray-200 rounded-md mb-6">
            <button
              className={`flex-1 py-2 rounded-md flex justify-center items-center gap-2 ${
                userType === 'tenant' ? 'bg-primary text-white' : 'text-gray-500'
              }`}
              onClick={() => setUserType('tenant')}
            >
              <User size={16} />
              Tenant
            </button>
            <button
              className={`flex-1 py-2 rounded-md flex justify-center items-center gap-2 ${
                userType === 'owner' ? 'bg-primary text-white' : 'text-gray-500'
              }`}
              onClick={() => setUserType('owner')}
            >
              <Building size={16} />
              Owner
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
              <div className="mt-1 text-right">
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 flex items-center">
            <hr className="flex-grow border-gray-200" />
            <span className="px-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex gap-2 items-center justify-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="flex gap-2 items-center justify-center">
              <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
        
        {/* Right column: Image/Info */}
        <div className="hidden md:block md:w-1/2 md:pl-12">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              {userType === 'tenant' ? 'Find Your Dream Home' : 'List Your Property With Us'}
            </h2>
            <p className="mb-6">
              {userType === 'tenant'
                ? 'Access thousands of verified properties with zero brokerage fee.'
                : 'Connect with genuine tenants directly and save on commissions.'}
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <Check size={16} className="text-white" />
                </div>
                <span>
                  {userType === 'tenant' ? 'Direct contact with owners' : 'Verified tenant profiles'}
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <Check size={16} className="text-white" />
                </div>
                <span>
                  {userType === 'tenant' ? 'Verified properties only' : 'Free listing management'}
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <Check size={16} className="text-white" />
                </div>
                <span>Zero brokerage fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
