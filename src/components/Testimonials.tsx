
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Reynolds",
    location: "New York, NY",
    comment: "The house cleaning service was exceptional! My home has never looked so spotless. Will definitely book again.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    id: 2,
    name: "Michael Johnson",
    location: "Chicago, IL",
    comment: "I hired a plumber through Helpy and he fixed my leaking pipes in no time. Very professional and reasonable prices.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "San Francisco, CA",
    comment: "The gardener helped transform my backyard into a beautiful space. Their attention to detail was amazing.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-helpy-orange-light">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-helpy-dark mb-4">What our customers say</h2>
          <p className="text-helpy-gray text-lg max-w-2xl mx-auto">
            Discover why thousands of homeowners trust our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white border-none shadow-md">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < currentTestimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-helpy-gray mb-4 italic">"{currentTestimonial.comment}"</p>
                  <h4 className="font-semibold text-helpy-dark">{currentTestimonial.name}</h4>
                  <p className="text-sm text-helpy-gray">{currentTestimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-helpy-gray" />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-helpy-gray" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-helpy-orange" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
