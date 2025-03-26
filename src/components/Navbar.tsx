
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Stories', path: '/stories' },
    { title: 'Mentorship', path: '/mentorship' },
    { title: 'Community', path: '/community' },
    { title: 'Advocacy', path: '/advocacy' },
    { title: 'Education', path: '/education' },
    { title: 'Challenges', path: '/challenges' },
    { title: 'News', path: '/news' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-playfair text-2xl font-bold text-primary">
              BridgeGap
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/join-us" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Join Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link 
                to="/join-us" 
                className="block px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
