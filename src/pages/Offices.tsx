import React from 'react';
import { motion } from 'framer-motion';

const Offices: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold-500 font-accent tracking-widest uppercase block mb-4">LOCATIONS</span>
          <h1 className="text-5xl md:text-7xl text-text-main font-primary font-bold mb-6">Our Chambers</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "Chandigarh", address: "SCO 123, Sector 17-C", phone: "+91 172 456 7890", mail: "chd@advocateprateek.com" },
            { city: "Ludhiana", address: "Feroze Gandhi Market, Suite 402", phone: "+91 161 234 5678", mail: "ldh@advocateprateek.com" },
            { city: "Gurugram", address: "Cyber City, DLF Phase 2", phone: "+91 124 987 6543", mail: "ggn@advocateprateek.com" }
          ].map((office, i) => (
            <motion.div
              key={i}
              className="glass-card p-10 text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-4xl font-primary text-gold-300 mb-6">{office.city}</h2>
              <address className="not-italic text-text-muted leading-loose mb-6">
                {office.address}<br />
                Phone: {office.phone}
              </address>
              <a href={`mailto:${office.mail}`} className="inline-block border-b border-gold-500 text-gold-500 hover:text-white hover:border-white transition-colors pb-1">
                {office.mail}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
