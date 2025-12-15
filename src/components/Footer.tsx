import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 pt-32 pb-10 text-text-muted text-sm relative">
      {/* Dynamic Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>

      <div className="container grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-20">
        <div className="brand-col">
          <h2 className="text-3xl text-gold-400 mb-4 font-primary">ADVOCATE PRATEEK</h2>
          <p className="leading-relaxed opacity-80">
            Uncompromising Excellence in<br />Litigation & Corporate Counsel.
          </p>
        </div>

        <div className="col">
          <h3 className="text-lg text-white mb-6 uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-gold-400 hover:pl-1 transition-all">Home</Link></li>
            <li><Link to="/team" className="hover:text-gold-400 hover:pl-1 transition-all">Our Team</Link></li>
            <li><Link to="/career" className="hover:text-gold-400 hover:pl-1 transition-all">Careers</Link></li>
            <li><Link to="/grievance" className="hover:text-gold-400 hover:pl-1 transition-all">Client Grievance</Link></li>
          </ul>
        </div>

        <div className="col">
          <h3 className="text-lg text-white mb-6 uppercase tracking-widest">Practice Areas</h3>
          <ul className="space-y-3">
            <li><Link to="/nri-services" className="hover:text-gold-400 hover:pl-1 transition-all">NRI Services</Link></li>
            <li><Link to="/services" className="hover:text-gold-400 hover:pl-1 transition-all">Real Estate & RERA</Link></li>
            <li><Link to="/services" className="hover:text-gold-400 hover:pl-1 transition-all">Criminal Defense</Link></li>
            <li><Link to="/services" className="hover:text-gold-400 hover:pl-1 transition-all">Corporate Law</Link></li>
          </ul>
        </div>

        <div className="col">
          <h3 className="text-lg text-white mb-6 uppercase tracking-widest">Contact</h3>
          <address className="not-italic leading-loose">
            SCO 123, Sector 17-C, Chandigarh<br />
            +91 172 456 7890<br />
            consult@advocateprateek.com
          </address>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-xs">
        <div className="container">
          <p className="mb-2">© {new Date().getFullYear()} Advocate Prateek. All Rights Reserved.</p>
          <p className="opacity-50 max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> This website is for informational purposes only (Bar Council of India Rule 36).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
