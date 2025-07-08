import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { colors } from '../utils/colors';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const locations = [
    'Brunswick', 'St. Simons Island', 'Jekyll Island', 'Sea Island',
    'Glynn County', 'Camden County', 'McIntosh County', 'Brantley County',
    'Waycross', 'Kingsland', 'Woodbine', 'Darien'
  ];

  const services = [
    'Deck Construction',
    'Bathroom Remodeling',
    'Home Repairs',
    'Handyman Services',
    'Home Renovations',
    'Electrical Work',
    'Siding Installation',
    'Tree Service',
    'Kitchen Remodeling',
    'Flooring Repair',
    'Custom Carpentry',
    'Trim Carpentry'
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        background: isScrolled ? 'white' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button - moved to left for better accessibility */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-white hover:text-primary-200 hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="flex-shrink-0 md:flex-shrink-0">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-800' : 'text-white'
            }`}>
              <span className="hidden sm:inline">Coastal Custom Carpentry</span>
              <span className="sm:hidden">Coastal Custom</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-4">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors duration-200"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  Locations
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {locationsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    onMouseEnter={() => setLocationsOpen(true)}
                    onMouseLeave={() => setLocationsOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {locations.map((location, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors duration-200"
                        >
                          {location}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular Nav Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                    isScrolled
                      ? `${colors.neutral.text.dark} ${colors.primary.hover.text.main}`
                      : `text-white hover:text-primary-200`
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Phone Button - Optimized for mobile */}
          <div className="flex items-center">
            <a
              href="tel:+15096209939"
              className={`flex items-center space-x-1 md:space-x-2 px-2 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-primary-600 hover:bg-primary-700 text-white backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:block">(509) 620-9939</span>
              <span className="block md:hidden text-sm">Call</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced Design */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="md:hidden relative z-50">
              <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-4 space-y-4">
                {/* Quick Actions */}
                <div className="flex space-x-3 pb-4 border-b border-gray-200">
                  <a
                    href="tel:+15096209939"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-bold transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </a>
                </div>

                {/* Main Navigation */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg text-lg font-medium transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Services Section */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Services</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md text-sm transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Service Areas Section */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md text-sm transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {location}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;