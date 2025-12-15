import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'PRACTICE AREAS' },
    { path: '/nri-services', label: 'NRI SERVICES' },
    { path: '/team', label: 'TEAM' },
    { path: '/career', label: 'CAREERS' },
    { path: '/grievance', label: 'GRIEVANCE' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-400 ease-premium ${scrolled ? 'py-4 bg-navy-900/85 backdrop-blur-xl border-b border-white/5 shadow-lg' : ''}`}>
      <div className="container flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-navy-950 shadow-lg shadow-gold-500/20">
            <Scale className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold font-primary tracking-tight text-white leading-none">
              ADVOCATE <span className="text-gold-500">PRATEEK</span>
            </span>
            <span className="text-[0.6rem] md:text-[0.65rem] text-gold-500/80 tracking-[0.2em] font-accent uppercase mt-1 hidden xs:block">
              Advocates & Legal Consultants
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="font-body text-sm font-semibold text-text-main tracking-widest relative pb-1 hover:text-gold-300 transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gold-500"
                  />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/offices"
              className="border border-gold-500 text-gold-500 px-6 py-2 text-xs font-bold tracking-widest hover:bg-gold-500/10 hover:text-white hover:shadow-light transition-all"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold-500 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[88px] bg-navy-950/95 backdrop-blur-xl border-t border-white/5 z-40 overflow-hidden"
          >
            <div className="container py-12 flex flex-col items-center space-y-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-2xl font-primary tracking-widest ${location.pathname === item.path ? 'text-gold-500' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/offices"
                  className="btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
