import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold-500 font-accent tracking-widest uppercase block mb-4">THE STRATEGISTS</span>
          <h1 className="text-5xl md:text-7xl text-text-main font-primary font-bold mb-6">Advocates & Consultants</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Advocate Prateek", role: "Principal Counsel", exp: "15+ Years Experience" },
            { name: "Aman Deep", role: "Sr. Associate", exp: "Corporate Law Specialist" },
            { name: "Riya Sharma", role: "Assoc. Counsel", exp: "Family Law & Arbitration" }
          ].map((member, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="h-80 bg-navy-800 relative overflow-hidden">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-3xl font-primary text-white mb-1 group-hover:text-gold-400 transition-colors">{member.name}</h3>
                  <p className="text-gold-600 uppercase tracking-widest text-sm font-bold">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-muted">{member.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
