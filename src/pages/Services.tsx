import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Building, Globe, Scale, Users, Landmark, Briefcase, ShieldAlert, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceSection = ({ category, description, items, index }: { category: string, description: string, items: any[], index: number }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-32 relative group">

      {/* Sticky Category Header */}
      <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
        <span className="text-gold-500 font-accent tracking-[0.2em] text-sm uppercase block mb-2">0{index} / Practice Area</span>
        <h2 className="text-5xl md:text-7xl font-primary text-white mb-6 group-hover:text-gold-300 transition-colors duration-500">
          {category}
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="lg:w-2/3 space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 border border-white/5 hover:border-gold-500/30 group/card relative overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Abstract Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-white/5 rounded-2xl text-gold-500 group-hover/card:bg-gold-500 group-hover/card:text-navy-900 transition-all duration-300">
                <item.icon size={32} />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-primary text-white mb-2 group-hover/card:text-gold-300 transition-colors">{item.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed text-sm">
                  {item.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover/card:text-gold-500 transition-colors">
                  Consult Attorney <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-32">

      {/* Hero */}
      <div className="container mb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-primary font-bold text-white mb-6"
        >
          Expertise
        </motion.h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          We specialize in high-stakes litigation and complex corporate advisory.
        </p>
        <div className="h-24 w-[1px] bg-gradient-to-b from-gold-500 to-transparent mx-auto mt-12"></div>
      </div>

      <div className="container">
        <ServiceSection
          index={1}
          category="Litigation"
          description="Aggressive representation in Criminal and Civil courts. When freedom and reputation are on the line."
          items={[
            { title: "Criminal Defense", icon: Gavel, desc: "Bail matters, Trials, and Appeals in High Court & Supreme Court. Defense against serious charges including PMLA and NDPS." },
            { title: "White Collar Crime", icon: ShieldAlert, desc: "Defense for corporate executives facing charges of fraud, embezzlement, or corruption." },
            { title: "Family Law", icon: Users, desc: "Sensitive handling of divorce, child custody disputes, and alimony settlements." }
          ]}
        />

        <ServiceSection
          index={2}
          category="Corporate"
          description="Strategic counsel for businesses. From incorporation to insolvency, we protect your commercial interests."
          items={[
            { title: "Insolvency & Bankruptcy", icon: Building, desc: "Representing creditors and debtors in NCLT proceedings under IBC." },
            { title: "Arbitration", icon: Scale, desc: "Alternative dispute resolution for commercial contracts and infrastructure projects." },
            { title: "Startups & Contracts", icon: Briefcase, desc: "Founders agreements, SHA, and IP protection for emerging businesses." }
          ]}
        />

        <ServiceSection
          index={3}
          category="Global"
          description="Dedicated wing for Non-Resident Indians managing affairs in India."
          items={[
            { title: "NRI Property Disputes", icon: Globe, desc: "Remote management of ancestral property claims and illegal possession defense." },
            { title: "Real Estate (RERA)", icon: Landmark, desc: "Builder disputes, possession delays, and title verification for investors." },
            { title: "Cross-Border Matrimonial", icon: HeartHandshake, desc: "Divorce proceedings involving multiple jurisdictions and complex custody laws." }
          ]}
        />
      </div>

    </div>
  );
};

export default Services;
