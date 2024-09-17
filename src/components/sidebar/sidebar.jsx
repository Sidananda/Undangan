import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaFileInvoice, FaEnvelope, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // State untuk buka/tutup sidebar

  const toggleSidebar = () => setIsOpen(!isOpen); // Fungsi toggle untuk buka/tutup

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md h-screen flex flex-col justify-between transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-6">
          {/* Toggle Button in Sidebar */}
          <button
            onClick={toggleSidebar}
            className="p-2 bg-accent rounded-full focus:outline-none mb-4"
          >
            <FaBars />
          </button>

          {/* User Avatar and Info */}
          {isOpen && (
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/src/assets/icons/avatar.png" 
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-lg text-primary">Joe Max</p>
                <p className="text-sm text-secondary">Team Leader</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive('/dashboard') ? 'bg-primary text-light' : 'text-gray-700 hover:bg-secondary hover:text-light'
              }`}
            >
              <FaTachometerAlt />
              {isOpen && <span>Dashboard</span>}
            </Link>

            <Link
              to="/billing"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive('/billing') ? 'bg-primary text-light' : 'text-gray-700 hover:bg-secondary hover:text-light'
              }`}
            >
              <FaFileInvoice />
              {isOpen && <span>Billing</span>}
            </Link>

            <Link
              to="/undangan"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive('/undangan') ? 'bg-primary text-light' : 'text-gray-700 hover:bg-secondary hover:text-light'
              }`}
            >
              <FaEnvelope />
              {isOpen && <span>Undangan</span>}
            </Link>

            <Link
              to="/pengaturan"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive('/pengaturan') ? 'bg-primary text-light' : 'text-gray-700 hover:bg-secondary hover:text-light'
              }`}
            >
              <FaCog />
              {isOpen && <span>Pengaturan</span>}
            </Link>
          </nav>
        </div>

        {/* Watermark Section */}
        {isOpen && (
          <div className="p-4 text-center text-secondary mb-6">
            <p className="text-sm">Tokoundangan 2024</p>
            <p className="text-xs">by Tokoevent</p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
