import React from 'react';
import { Award, Users, Calendar, CheckCircle } from 'lucide-react';
import { colors, gradients } from '../utils/colors';

const SocialProof: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Customers",
      description: "Satisfied homeowners across [YOUR LOCATION]"
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Years Experience",
      description: "Years of carpentry and handyman services"
    },
    {
      icon: CheckCircle,
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered carpentry projects"
    },
    {
      icon: Award,
      number: "5.0",
      label: "Star Rating",
      description: "Average rating from Google reviews"
    }
  ];

  const certifications = [
    "Licensed & Insured",
    "BBB A+ Rating",
    "Certified Carpenters",
    "Bonded Professionals",
    "OSHA Safety Trained",
    "Quality Guarantees"
  ];

  const serviceAreas = [
    "[YOUR LOCATION]", "[AREA 1]", "[AREA 2]", "[AREA 3]",
    "[AREA 4]", "[AREA 5]", "[AREA 6]", "[AREA 7]",
    "[AREA 8]", "[AREA 9]", "[AREA 10]", "[AREA 11]"
  ];

  return (
    <section className={`py-20 bg-gradient-to-br ${colors.primary.bg.lightest} to-primary-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${colors.neutral.text.darkest} mb-4`}>
            Trusted by [YOUR LOCATION] Homeowners
          </h2>
          <p className={`text-xl ${colors.neutral.text.main} max-w-3xl mx-auto`}>
            Our track record speaks for itself. We've built our reputation one project at a time.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.primary.bg.lighter} rounded-full mb-4`}>
                <stat.icon className={`w-8 h-8 ${colors.primary.text.main}`} />
              </div>
              <div className={`text-3xl font-bold ${colors.neutral.text.darkest} mb-2`}>
                {stat.number}
              </div>
              <div className={`text-lg font-semibold ${colors.neutral.text.darker} mb-2`}>
                {stat.label}
              </div>
              <div className={`text-sm ${colors.neutral.text.main}`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications & Credentials */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className={`text-2xl font-bold ${colors.neutral.text.darkest} mb-6`}>
              Licensed & Certified Professionals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 ${colors.success.bg.light} rounded-lg`}
                >
                  <CheckCircle className={`w-5 h-5 ${colors.success.text.main} flex-shrink-0`} />
                  <span className={`${colors.neutral.text.darker} font-medium`}>{cert}</span>
                </div>
              ))}
            </div>
            <div className={`mt-6 p-4 ${colors.primary.bg.lightest} rounded-lg`}>
              <p className={`${colors.primary.text.darker} font-medium`}>
                ✓ Fully bonded and insured for your peace of mind
              </p>
              <p className={`${colors.primary.text.dark} text-sm mt-1`}>
                All work comes with comprehensive warranties and guarantees
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className={`text-2xl font-bold ${colors.neutral.text.darkest} mb-6`}>
              Serving [YOUR LOCATION]
            </h3>
            <p className={`${colors.neutral.text.main} mb-6`}>
              We proudly serve homeowners throughout [YOUR LOCATION] with professional carpentry and handyman services.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className={`text-center py-2 px-3 ${colors.neutral.bg.lighter} rounded-lg ${colors.neutral.text.darker} font-medium ${colors.primary.hover.bg.lightest} ${colors.primary.hover.text.darker} transition-colors duration-300`}
                >
                  {area}
                </div>
              ))}
            </div>
            <div className={`mt-6 p-4 ${gradients.primary} rounded-lg text-white`}>
              <p className="font-medium">Don't see your city listed?</p>
              <p className={`${colors.primary.text.lighter} text-sm mt-1`}>
                Contact us! We may still be able to serve your area.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <Award className={`w-6 h-6 ${colors.warning.text.main}`} />
              <span className={`font-semibold ${colors.neutral.text.darkest}`}>Award-Winning Service</span>
            </div>
            <div className={`w-px h-6 ${colors.neutral.border.main}`}></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className={`w-6 h-6 ${colors.success.text.main}`} />
              <span className={`font-semibold ${colors.neutral.text.darkest}`}>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;