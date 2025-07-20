
import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Heart, MessageCircle, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "tenant" | "owner";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const tenantLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Saved Properties", path: "/saved", icon: <Heart size={20} /> },
    { name: "Applications", path: "/applications", icon: <MessageCircle size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  const ownerLinks = [
    { name: "Dashboard", path: "/owner-dashboard", icon: <Home size={20} /> },
    { name: "My Listings", path: "/my-listings", icon: <Heart size={20} /> },
    { name: "Tenant Applications", path: "/tenant-applications", icon: <MessageCircle size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  const links = userType === "tenant" ? tenantLinks : ownerLinks;

  return (
    <div className="flex min-h-screen bg-neutral">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">HomeEase</h2>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-neutral transition-colors text-text hover:text-primary"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
            <li className="pt-10">
              <Link
                to="/logout"
                className="flex items-center gap-3 px-4 py-3 text-red-500 rounded-md hover:bg-red-50 transition-colors"
              >
                <LogOut size={20} />
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden z-10">
        <div className="flex justify-around">
          {links.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex flex-col items-center p-3 text-text hover:text-primary"
            >
              {link.icon}
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-8 pb-20 md:pb-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
