import React from 'react';
import { motion } from 'framer-motion';

const Grievance: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl text-text-main font-primary font-bold mb-6">Client Grievance & Consultation</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            We take every concern seriously. Report an issue or book a priority video consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Grievance Form */}
          <motion.div
            className="glass-card p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-primary text-gold-300 mb-8">Submit a Grievance</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gold-500 uppercase tracking-wider mb-2">Case Reference No.</label>
                <input type="text" className="w-full bg-navy-900 border border-white/10 p-3 text-white focus:border-gold-500 outline-none transition-colors" placeholder="e.g. AP-2023-104" />
              </div>
              <div>
                <label className="block text-sm text-gold-500 uppercase tracking-wider mb-2">Description of Issue</label>
                <textarea rows={5} className="w-full bg-navy-900 border border-white/10 p-3 text-white focus:border-gold-500 outline-none transition-colors" placeholder="Please describe your concern in detail..."></textarea>
              </div>
              <button className="btn-primary w-full">Submit Report</button>
            </form>
          </motion.div>

          {/* Consultation Booking */}
          <motion.div
            className="glass-card p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-primary text-gold-300 mb-8">Book Private Consultation</h2>
            <div className="space-y-6 text-text-muted">
              <p>Skip the queue and book a direct 30-minute video conference with Advocate Prateek.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Case Evaluation & Strategy</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Document Review</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Legal Second Opinion</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-white/10">
                <button className="w-full py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 uppercase tracking-widest font-bold transition-all">
                  Schedule Now (₹2500)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Grievance;
