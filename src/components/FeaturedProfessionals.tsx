
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Sarah Jonson",
    profession: "House Cleaner",
    rating: 4.8,
    reviews: 124,
    experience: "8+ years",
    price: "$25/hr",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "David Miller",
    profession: "Plumber & Handyman",
    rating: 4.9,
    reviews: 189,
    experience: "12+ years",
    price: "$35/hr",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    profession: "Interior Designer",
    rating: 4.7,
    reviews: 98,
    experience: "6+ years",
    price: "$40/hr",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
  },
  {
    id: 4,
    name: "Marcus Thompson",
    profession: "Gardener",
    rating: 4.6,
    reviews: 78,
    experience: "5+ years",
    price: "$30/hr",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
];

const FeaturedProfessionals = () => {
  return (
    <section className="py-16 bg-helpy-gray-light">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-helpy-dark mb-4">Top rated professionals</h2>
          <p className="text-helpy-gray text-lg max-w-2xl mx-auto">
            Our most trusted and highest-rated helpers ready to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((professional) => (
            <Card key={professional.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <img 
                  src={professional.image} 
                  alt={professional.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg text-helpy-dark">{professional.name}</h3>
                <p className="text-helpy-gray text-sm mb-2">{professional.profession}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-1">
                    <StarIcon className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm font-medium">{professional.rating}</span>
                  <span className="text-sm text-helpy-gray ml-1">({professional.reviews} reviews)</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-helpy-gray">{professional.experience}</span>
                  <span className="font-medium text-helpy-orange">{professional.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;
