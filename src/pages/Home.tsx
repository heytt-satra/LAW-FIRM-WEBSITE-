import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Building2, Gavel, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const HolographicCard = ({ index, title, desc, icon: Icon, delay }: { index: string, title: string, desc: string, icon: any, delay: number }) => (
  <motion.div
    className="glass-card p-10 relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-end border border-white/5 hover:border-gold-500/30 hover:shadow-[0_0_40px_rgba(201,160,80,0.15)] transition-all duration-500"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    {/* Holographic Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

    {/* Floating 3D Icon */}
    <div className="absolute top-8 right-8 text-gold-500/20 group-hover:text-gold-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
      <Icon size={64} strokeWidth={1} />
    </div>

    <span className="absolute top-8 left-8 font-primary text-sm tracking-widest text-gold-500/40">0{index}</span>

    <div className="relative z-10">
      <h3 className="text-3xl text-white mb-4 font-primary group-hover:text-gold-300 transition-colors">{title}</h3>
      <p className="text-text-muted text-lg leading-relaxed mb-6 group-hover:text-white/80 transition-colors">{desc}</p>

      <div className="flex items-center gap-2 text-gold-500 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <span>Explore Practice</span>
        <ArrowRight size={16} />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-700 group-hover:w-full"></div>
  </motion.div>
);

const Home: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center -mt-[100px] pt-[100px]">
        {/* Note: Global 3D Background is in RootLayout */}

        <div className="container relative z-10 w-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 justify-center">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="font-accent text-gold-500 text-sm tracking-[0.3em] uppercase">
                Advocates & Legal Consultants
              </span>
              <div className="h-[1px] w-12 bg-gold-500"></div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold text-text-main mb-8 leading-[0.9] font-primary tracking-tight">
              Unrelenting Defense. <br />
              <span className="text-gold-500">
                Strategic Victory.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-text-muted max-w-2xl mb-12 font-light leading-relaxed mx-auto">
              Premium legal counsel for Global Indians and Corporate Entities across the Supreme Court & High Courts.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center">
              <button className="btn-primary w-full md:w-auto justify-center">
                Book Consultation
              </button>
              <Link to="/services" className="px-8 py-3 border border-white/10 text-white hover:bg-white/5 transition-all uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 w-full md:w-auto">
                Our Expertise
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies (Holographic Cards) */}
      <section className="py-32 relative z-20">
        <div className="container">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 border-b border-white/5 pb-8 text-center md:text-left w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 md:mb-0">
              <span className="text-gold-500 font-accent tracking-widest uppercase text-xs mb-2 block">Our Areas of Practice</span>
              <h2 className="text-4xl md:text-5xl font-primary text-white">Core Competencies</h2>
            </div>
            <Link to="/services" className="text-text-muted hover:text-gold-500 transition-colors flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HolographicCard
              index="1"
              title="NRI Services"
              desc="Virtual representation for property and matrimonial disputes, effectively managing your assets from abroad."
              icon={Globe}
              delay={0}
            />
            <HolographicCard
              index="2"
              title="Real Estate"
              desc="End-to-end Due Diligence and RERA litigation. We secure your land against fraud and illegal possession."
              icon={Building2}
              delay={0.2}
            />
            <HolographicCard
              index="3"
              title="White Collar"
              desc="Aggressive defense in Financial Fraud, PMLA, and Corporate Liability matters. We protect reputations."
              icon={Gavel}
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
