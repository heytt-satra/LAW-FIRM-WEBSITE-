import React from 'react';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold-500 font-accent tracking-widest uppercase block mb-4">JOIN THE ELITE</span>
          <h1 className="text-5xl md:text-7xl text-text-main font-primary font-bold mb-6">Careers & Internships</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Work with some of the sharpest legal minds in North India. We value precision, integrity, and grit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legal Associate */}
          <motion.div
            className="glass-card p-10"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-primary text-gold-300 mb-2">Legal Associate</h3>
            <p className="text-sm text-text-muted mb-6 uppercase tracking-wider">Chandigarh • Full Time • 2+ Years Exp</p>
            <p className="text-text-main mb-8 leading-relaxed">
              We are looking for a dedicated litigation lawyer with experience in High Court writs and civil disputes. Must possess excellent drafting skills.
            </p>
            <button className="px-6 py-2 border border-gold-500 text-gold-500 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-navy-900 transition-all">
              Apply via Email
            </button>
          </motion.div>

          {/* Internships */}
          <motion.div
            className="glass-card p-10"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-primary text-gold-300 mb-2">Legal Internship</h3>
            <p className="text-sm text-text-muted mb-6 uppercase tracking-wider">Chandigarh/Remote • 2 Months</p>
            <p className="text-text-main mb-8 leading-relaxed">
              Open to 4th and 5th-year law students. Gain hands-on experience in research, basics of drafting, and court proceedings.
            </p>
            <button className="px-6 py-2 border border-gold-500 text-gold-500 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-navy-900 transition-all">
              Apply via Email
            </button>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-text-muted">
            Send your CV and Cover Letter to <a href="mailto:careers@advocateprateek.com" className="text-gold-500 hover:underline">careers@advocateprateek.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
