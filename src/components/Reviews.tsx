import React from 'react';
import { Star, Quote } from 'lucide-react';
import { colors, gradients } from '../utils/colors';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Rhett Thompson",
      location: "Marietta, GA",
      rating: 5,
      text: "I hired Mike and his crew for a complex rebuild of my residential home in Marietta. Initially, Mike was hired to handle the intricate framing requirements to change my ranch house into a three story 6,000 sq ft home. The results were exceptional. Afterwards, windows, doors, trim, etc. elements were added to the project upon the excellence of their capabilities. Multitalented and good quality -- recommended for sure.",
      date: "2 years ago",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Morris",
      location: "Fairmount, GA",
      rating: 5,
      text: "Mike Walker and his team did some work on our home and they did an excellent job! Highly recommend them!",
      date: "5 days ago",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Amanda Jenkins",
      location: "North Georgia",
      rating: 5,
      text: "Awesome fast service. Very professional I hired them to put up a sign for me and they not only got it up in the day I called them it looked awesome. If you need work done I highly recommend them.",
      date: "2 years ago",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "David Are",
      location: "North Georgia",
      rating: 5,
      text: "Excellent construction of a large deck on a steep lot. His ability to work different shapes into my deck was key to a great outcome. Strongly recommend!!!",
      date: "2 years ago",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "John Evans",
      location: "North Georgia",
      rating: 5,
      text: "Mike does great work at a fair price. Highly recommended!",
      date: "1 year ago",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 6,
      name: "Beth Hillhouse",
      location: "North Georgia",
      rating: 5,
      text: "Very happy with the work they completed. They were very helpful and knowledgeable. I would highly recommend using their services.",
      date: "2 years ago",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? `${colors.warning.text.main} fill-current` : colors.neutral.text.lighter}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${colors.neutral.text.darkest} mb-4`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl ${colors.neutral.text.main} max-w-3xl mx-auto mb-8`}>
            Don't just take our word for it. Here's what our satisfied customers have to say about their carpentry and handyman experience with us.
          </p>

          {/* Overall Rating */}
          <div className={`inline-flex items-center ${colors.primary.bg.lightest} px-6 py-3 rounded-full`}>
            <div className="flex items-center space-x-2">
              {renderStars(5)}
              <span className={`text-2xl font-bold ${colors.neutral.text.darkest} ml-2`}>4.7</span>
              <span className={colors.neutral.text.main}>• 12 Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`${colors.neutral.bg.lightest} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className={`w-8 h-8 ${colors.primary.text.main} opacity-50`} />
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Text */}
              <p className={`${colors.neutral.text.dark} mb-6 leading-relaxed`}>
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className={`font-semibold ${colors.neutral.text.darkest}`}>{review.name}</h4>
                  <p className={`text-sm ${colors.neutral.text.main}`}>{review.location}</p>
                  <p className={`text-xs ${colors.neutral.text.light}`}>{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`${gradients.primary} rounded-2xl p-8 text-white`}>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Experience the same exceptional service and craftsmanship that has earned us 4.7-star reviews.
              Get your free consultation today!
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center px-8 py-4 bg-white ${colors.primary.text.main} font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105`}
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;