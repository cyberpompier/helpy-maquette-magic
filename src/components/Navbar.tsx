
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-helpy-dark">helpy</span>
          <span className="text-helpy-orange text-2xl font-bold">.</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-helpy-dark font-medium hover:text-helpy-orange transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-helpy-gray font-medium hover:text-helpy-orange transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-helpy-gray font-medium hover:text-helpy-orange transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-helpy-gray font-medium hover:text-helpy-orange transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-helpy-gray font-medium">
            Login
          </Button>
          <Button variant="default" className="bg-helpy-orange hover:bg-helpy-orange/90 text-white">
            Sign up
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-helpy-dark font-medium py-2 hover:text-helpy-orange transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-helpy-gray font-medium py-2 hover:text-helpy-orange transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-helpy-gray font-medium py-2 hover:text-helpy-orange transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-helpy-gray font-medium py-2 hover:text-helpy-orange transition-colors">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="ghost" className="justify-start text-helpy-gray font-medium">
                Login
              </Button>
              <Button variant="default" className="bg-helpy-orange hover:bg-helpy-orange/90 text-white">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
