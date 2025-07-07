import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { colors } from '../utils/colors';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Deck Construction",
    "Bathroom Remodeling",
    "Home Repairs",
    "Handyman Services",
    "Home Renovations",
    "Electrical Work",
    "Siding Installation",
    "Tree Service"
  ];

  const serviceAreas = [
    "Brunswick", "St. Simons Island", "Jekyll Island", "Sea Island",
    "Glynn County", "Camden County", "McIntosh County", "Darien"
  ];

  return (
    <footer className={`${colors.neutral.bg.darkest} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Horizon Carpentry & Handyman</h3>
            <p className={`${colors.neutral.text.lighter} mb-6 leading-relaxed`}>
              North Georgia's trusted carpentry and handyman specialists. We bring quality
              craftsmanship and reliable service to every project.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className={`w-10 h-10 ${colors.neutral.bg.darker} rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300`}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`w-10 h-10 ${colors.neutral.bg.darker} rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`w-10 h-10 ${colors.neutral.bg.darker} rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`${colors.neutral.text.lighter} hover:text-white transition-colors duration-300`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`${colors.neutral.text.lighter} hover:text-white transition-colors duration-300`}
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <p className={`${colors.neutral.text.light} text-sm mt-4`}>
              Don't see your city? Contact us - we may still serve your area!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className={`w-5 h-5 ${colors.primary.text.main} mt-1 flex-shrink-0`} />
                <div>
                  <p className="font-medium">(509) 620-9939</p>
                  <p className={`${colors.neutral.text.light} text-sm`}>Call or text anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className={`w-5 h-5 ${colors.primary.text.main} mt-1 flex-shrink-0`} />
                <div>
                  <p className="font-medium">gibbywalker224@gmail.com</p>
                  <p className={`${colors.neutral.text.light} text-sm`}>Email us your questions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 ${colors.primary.text.main} mt-1 flex-shrink-0`} />
                <div>
                  <p className="font-medium">166 Spring St</p>
                  <p className={`${colors.neutral.text.light} text-sm`}>Fairmount, GA 30139</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className={`w-5 h-5 ${colors.primary.text.main} mt-1 flex-shrink-0`} />
                <div>
                  <p className="font-medium">Mon-Thu: 9AM-6PM</p>
                  <p className={`${colors.neutral.text.light} text-sm`}>Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${colors.neutral.border.darker} mt-12 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${colors.neutral.text.light} text-sm`}>
              © {currentYear} Horizon Carpentry & Handyman. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/privacy" className={`${colors.neutral.text.light} hover:text-white transition-colors duration-300`}>
                Privacy Policy
              </a>
              <a href="/terms" className={`${colors.neutral.text.light} hover:text-white transition-colors duration-300`}>
                Terms of Service
              </a>
              <a href="#" className={`${colors.neutral.text.light} hover:text-white transition-colors duration-300`}>
                License Info
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className={`${colors.neutral.text.main} text-xs`}>
              Licensed, Bonded & Insured • Georgia Contractor License • Fully Insured & Bonded
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;