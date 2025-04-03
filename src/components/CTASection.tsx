
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="bg-helpy-orange rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to make your home tasks easier?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who have simplified their home maintenance with our reliable professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-helpy-orange hover:bg-white/90 hover:text-helpy-orange font-semibold px-8 py-6">
              Find a Service
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6">
              Become a Helper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
