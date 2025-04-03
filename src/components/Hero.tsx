
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-20 bg-helpy-orange-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-helpy-dark mb-6 leading-tight">
            Find the perfect helper for your home needs
          </h1>
          <p className="text-helpy-gray text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with trusted local professionals for any home service
            you need, from cleaning to repairs and more.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center relative">
              <Search className="absolute left-3 text-helpy-gray h-5 w-5" />
              <Input 
                type="text" 
                placeholder="What service do you need?" 
                className="pl-10 pr-24 py-6 rounded-full border-gray-200 shadow-sm text-base" 
              />
              <Button 
                className="absolute right-1 bg-helpy-orange hover:bg-helpy-orange/90 text-white rounded-full px-5"
              >
                Search
              </Button>
            </div>
            <p className="text-sm text-helpy-gray mt-3">
              Popular: Cleaning, Plumbing, Electrical, Gardening
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
