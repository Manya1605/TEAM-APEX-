
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">BridgeGap</h3>
            <p className="text-gray-300 mb-4">
              Empowering equality, one step at a time. Join our global community committed to bridging the gender gap.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-primary transition-colors">Data Dashboard</Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-primary transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-primary transition-colors">Mentorship</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-primary transition-colors">Community</Link>
              </li>
              <li>
                <Link to="/advocacy" className="text-gray-300 hover:text-primary transition-colors">Advocacy</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-primary transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/challenges" className="text-gray-300 hover:text-primary transition-colors">Challenges</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-primary transition-colors">News & Insights</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span>123 Equality Road, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <span>info@bridgegap.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest news and opportunities in gender equality.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button 
                className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} BridgeGap. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
