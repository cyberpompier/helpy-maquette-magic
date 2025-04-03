
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-helpy-dark">helpy</span>
              <span className="text-helpy-orange text-2xl font-bold">.</span>
            </Link>
            <p className="text-helpy-gray mb-6">
              Connecting homeowners with reliable service providers for all your home needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 text-helpy-gray hover:bg-helpy-orange hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-helpy-gray hover:bg-helpy-orange hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-helpy-gray hover:bg-helpy-orange hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-helpy-dark mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cleaning" className="text-helpy-gray hover:text-helpy-orange transition-colors">House Cleaning</Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-helpy-gray hover:text-helpy-orange transition-colors">Plumbing & Repairs</Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-helpy-gray hover:text-helpy-orange transition-colors">Painting</Link>
              </li>
              <li>
                <Link to="/services/gardening" className="text-helpy-gray hover:text-helpy-orange transition-colors">Gardening</Link>
              </li>
              <li>
                <Link to="/services" className="text-helpy-gray hover:text-helpy-orange transition-colors">View All Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-helpy-dark mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-helpy-gray hover:text-helpy-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-helpy-gray hover:text-helpy-orange transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-helpy-gray hover:text-helpy-orange transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/terms" className="text-helpy-gray hover:text-helpy-orange transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-helpy-gray hover:text-helpy-orange transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-helpy-dark mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-helpy-orange mr-2 mt-1 flex-shrink-0" />
                <span className="text-helpy-gray">123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-helpy-orange mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-helpy-gray hover:text-helpy-orange transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-helpy-orange mr-2 flex-shrink-0" />
                <a href="mailto:info@helpy.com" className="text-helpy-gray hover:text-helpy-orange transition-colors">info@helpy.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-helpy-gray text-sm">
            © {new Date().getFullYear()} Helpy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
