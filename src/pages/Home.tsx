import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Building2, Gavel, ArrowRight, Plane, Users, Briefcase, AlertCircle, MapPin, Scale, Trophy, ChevronRight } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};



const HolographicCard = ({ index, title, desc, icon: Icon, delay }: { index: string, title: string, desc: string, icon: any, delay: number }) => (
  <motion.div
    className="glass-card p-6 md:p-10 relative overflow-hidden group cursor-pointer h-auto md:h-[400px] flex flex-col justify-end border border-white/5 hover:border-gold-500/30 hover:shadow-[0_0_40px_rgba(201,160,80,0.15)] transition-all duration-500"
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

    <div className="relative z-10 pt-20 md:pt-0">
      <h3 className="text-2xl md:text-3xl text-white mb-4 font-primary group-hover:text-gold-300 transition-colors">{title}</h3>
      <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 group-hover:text-white/80 transition-colors">{desc}</p>

      <div className="flex items-center gap-2 text-gold-500 text-sm font-bold tracking-widest uppercase opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-800/20 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center -mt-[100px] pt-[100px]">
        {/* Note: Global 3D Background is in RootLayout */}

        <div className="container relative z-10 w-full flex flex-col justify-center items-center text-center px-4 md:px-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6 justify-center">
              <div className="h-[1px] w-8 md:w-12 bg-gold-500/50"></div>
              <span className="font-accent text-gold-400 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase glow-text whitespace-nowrap">
                Advocates & Legal Consultants
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-gold-500/50"></div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] font-primary tracking-tight">
              Unrelenting Defense. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 drop-shadow-2xl">
                Strategic Victory.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-text-muted max-w-2xl mb-8 md:mb-12 font-light leading-relaxed mx-auto">
              Premium legal counsel for Global Indians and Corporate Entities across the Supreme Court & High Courts.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto items-center">
              <button className="btn-primary w-full md:w-auto justify-center group relative overflow-hidden py-4 md:py-3 text-sm md:text-base">
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
              <Link to="/services" className="px-8 py-4 md:py-3 border border-white/10 text-white hover:bg-white/5 transition-all uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 w-full md:w-auto hover:border-gold-500/50 hover:text-gold-400">
                Our Expertise
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-500/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="uppercase text-[10px] tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0"></div>
        </motion.div>
      </section>

      {/* Core Competencies (Holographic Cards) */}
      <section className="py-20 md:py-32 relative z-20">
        <div className="container px-6 md:px-0">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 border-b border-white/5 pb-8 text-center md:text-left w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 md:mb-0">
              <span className="text-gold-500 font-accent tracking-widest uppercase text-xs mb-2 block">Our Areas of Practice</span>
              <h2 className="text-3xl md:text-5xl font-primary text-white">Core Competencies</h2>
            </div>
            <Link to="/services" className="group text-text-muted hover:text-gold-500 transition-colors flex items-center gap-2 text-sm md:text-base">
              View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* NRI Glimpse - Rotating Globe & Flight Path */}
      <section className="py-20 md:py-24 relative z-20 border-t border-white/5 overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-6 shadow-[0_0_15px_rgba(201,160,80,0.2)]">
              <Plane className="w-3 h-3 text-gold-500" />
              <span className="text-gold-500 text-[10px] font-bold tracking-widest uppercase">Global Legal Wing</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-primary text-white mb-6 leading-tight">Bridging Borders. <br /><span className="text-gold-500">Defending Rights.</span></h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8 border-none md:border-l-2 border-gold-500/30 pl-0 md:pl-6">
              We act as your legal eyes and ears in India. Manage ancestral property, matrimonial disputes, and investments without changing timezones.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link to="/nri-services" className="btn-primary inline-flex items-center gap-2">
                Explore NRI Services <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center perspective-1000 mt-8 md:mt-0">
            {/* Spinning Grids - Scaled down for mobile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 md:inset-0 border border-white/5 rounded-full border-dashed scale-75 md:scale-100"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 md:inset-12 border border-gold-500/10 rounded-full border-dotted scale-75 md:scale-100"
            ></motion.div>

            <div className="glass-card p-6 md:p-10 relative z-10 backdrop-blur-md bg-navy-900/50 border-gold-500/20 text-center scale-90 md:scale-100">
              <motion.div
                animate={{
                  boxShadow: ["0 0 20px rgba(201,160,80,0.1)", "0 0 50px rgba(201,160,80,0.3)", "0 0 20px rgba(201,160,80,0.1)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-gold-500 to-amber-700 rounded-full flex items-center justify-center mb-4 md:mb-6 text-navy-950"
              >
                <Globe size={40} strokeWidth={1.5} className="md:w-[50px] md:h-[50px]" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
              <div className="text-gold-500/70 text-xs md:text-sm uppercase tracking-widest">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Glimpse - Card Stack */}
      <section className="py-20 md:py-32 relative z-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container text-center px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-navy-800 rounded-full border border-white/5">
                <Users className="w-8 h-8 text-gold-500" />
              </div>
            </div>
            <h2 className="text-3xl md:text-6xl font-primary text-white mb-6">The Strategists</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Led by Advocate Prateek, our team comprises senior counsels and domain experts dedicated to your victory.
            </p>
          </motion.div>

          {/* Simulated Card Stack - Adjusted for Mobile using standard flex layout on small screens if simpler, or scaled stack */}
          {/* We will scale it down and adjust position for mobile to fit 'originality' request */}
          <div className="relative h-[500px] md:h-[400px] max-w-4xl mx-auto mb-12 group scale-90 md:scale-100 origin-top">
            <motion.div
              className="absolute top-20 md:top-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-navy-800 border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col justify-end transform origin-bottom"
              initial={{ rotate: -5, x: -10, scale: 0.9 }}
              whileInView={{ rotate: -5, x: -140, scale: 0.9 }}
              viewport={{ once: true }}
              style={{ zIndex: 1 }}
            >
              <div className="text-left">
                <div className="text-gold-500 text-sm tracking-widest mb-1">Associate Counsel</div>
                <div className="text-white text-xl font-bold">Riya Sharma</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-10 md:top-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-navy-800 border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col justify-end transform origin-bottom z-10"
              initial={{ rotate: 5, x: 10, scale: 0.9 }}
              whileInView={{ rotate: 5, x: 40, scale: 0.9 }}
              viewport={{ once: true }}
              style={{ zIndex: 0 }}
            >
              <div className="text-left">
                <div className="text-gold-500 text-sm tracking-widest mb-1">Senior Associate</div>
                <div className="text-white text-xl font-bold">Aman Deep</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-0 md:top-[-20px] left-1/2 -translate-x-1/2 w-72 h-96 bg-gradient-to-br from-gold-600 to-amber-800 rounded-xl shadow-[0_20px_60px_rgba(201,160,80,0.3)] p-8 flex flex-col justify-end z-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute top-6 right-6">
                <Scale className="text-navy-900 w-10 h-10" />
              </div>
              <div className="text-left text-navy-950">
                <div className="text-navy-900/70 text-sm tracking-widest uppercase font-bold mb-2">My Legal Counsel</div>
                <div className="text-3xl font-black font-primary">Advocate Prateek</div>
                <div className="mt-4 pt-4 border-t border-navy-900/20 text-sm font-semibold">15+ Years of Excellence</div>
              </div>
            </motion.div>
          </div>


          <Link to="/team" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors uppercase tracking-widest font-bold text-sm bg-white/5 px-8 py-3 rounded hover:bg-gold-500 mt-8 md:mt-0">
            Meet The Full Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Career Glimpse - Modern Split */}
      <section className="py-20 md:py-24 relative z-20 border-t border-white/5">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6 md:px-0">
          <div className="order-2 md:order-1 glass-card p-8 md:p-12 border-gold-500/20 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl md:text-3xl text-white font-primary mb-6 md:mb-8 flex items-center gap-3">
              <Trophy className="text-gold-500" /> Why Join Us?
            </h3>
            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {['High-Stakes Litigation', 'Supreme Court Exposure', 'Premium Mentorship'].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 text-text-muted text-base md:text-lg bg-white/5 p-4 rounded hover:bg-white/10 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_var(--color-gold-500)]"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link to="/career" className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-bold">Apply Now</Link>
          </div>

          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-3 hover:rotate-6 transition-transform duration-500 mx-auto md:mx-0">
              <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-gold-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-primary text-white mb-4 md:mb-6 leading-tight">Join The <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Legal Elite.</span></h2>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8">
              We don't just hire lawyers; we mold litigators. Work with some of the sharpest legal minds in North India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grievance & Contact Grid - Interactive Cards */}
      <section className="py-20 md:py-24 relative z-20 bg-navy-950">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-0">
          {/* Grievance */}
          <motion.div
            className="glass-card p-8 md:p-12 hover:border-red-400/50 transition-all duration-500 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 p-24 md:p-32 bg-red-500/5 blur-[80px] rounded-full group-hover:bg-red-500/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl md:text-3xl text-white font-primary mb-4">Grievance Redressal</h3>
              <p className="text-text-muted mb-8 text-base md:text-lg">
                We take every concern seriously. Report an issue or book a priority video consultation directly.
              </p>
              <Link to="/grievance" className="flex items-center gap-2 text-white group-hover:text-red-400 transition-colors uppercase tracking-widest text-xs md:text-sm font-bold">
                Visit Grievance Cell <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="glass-card p-8 md:p-12 hover:border-gold-500/50 transition-all duration-500 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 p-24 md:p-32 bg-gold-500/5 blur-[80px] rounded-full group-hover:bg-gold-500/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl md:text-3xl text-white font-primary mb-4">Our Chambers</h3>
              <p className="text-text-muted mb-8 text-base md:text-lg">
                Strategically located in Chandigarh, Ludhiana, and Gurugram for Pan-India connectivity.
              </p>
              <Link to="/offices" className="flex items-center gap-2 text-white group-hover:text-gold-500 transition-colors uppercase tracking-widest text-xs md:text-sm font-bold">
                View Locations <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
