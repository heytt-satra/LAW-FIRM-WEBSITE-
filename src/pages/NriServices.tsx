import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Video, FileCheck, ShieldAlert, BadgeCheck, Plane } from 'lucide-react';

// --- 3D Components ---

const Globe = () => {
  const globeRef = useRef<any>(null);

  useFrame((state) => {
    if (globeRef.current) {
      // Auto-rotation when not interacting
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      <Sphere ref={globeRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial
          color="#0a192f"
          emissive="#112240"
          emissiveIntensity={0.5}
          roughness={0.7}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>
      {/* Wireframe Overlay for Tech/Legal feel */}
      <Sphere args={[2.52, 64, 64]}>
        <meshBasicMaterial color="#c9a050" wireframe transparent opacity={0.15} />
      </Sphere>
      {/* Markers */}
      <group rotation={[0, 0, 0.2]}>
        <mesh position={[2.2, 0.5, 1]}>
          <sphereGeometry args={[0.08]} />
          <meshBasicMaterial color="#c9a050" />
        </mesh>
        <Html position={[2.3, 0.6, 1]} center>
          <div className="bg-navy-900/90 text-gold-500 px-2 py-1 text-[10px] border border-gold-500/30 rounded backdrop-blur-md">
            INDIA (HQ)
          </div>
        </Html>
      </group>
    </group>
  );
};

const GlobeHero = () => {
  return (
    <div className="h-[60vh] w-full relative cursor-move">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#c9a050" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#004080" />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute bottom-4 left-0 w-full text-center text-gold-500/50 text-xs uppercase tracking-widest pointer-events-none">
        Interactive Global Network • Drag to Rotate
      </div>
    </div>
  );
};

// --- Widget Components ---

const TimezoneWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card p-6 border-l-4 border-gold-500">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-gold-500 uppercase tracking-widest text-xs font-bold">Live Connectivity</h4>
        <Clock className="w-4 h-4 text-gold-500" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-xs text-text-muted block mb-1">Punjab (IST)</span>
          <span className="text-2xl text-white font-mono">
            {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div>
          <span className="text-xs text-text-muted block mb-1">New York (EST)</span>
          <span className="text-xl text-text-muted font-mono">
            {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

const VideoConsultWidget = () => (
  <div className="glass-card p-6 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 bg-gold-500/10 rounded-bl-2xl">
      <Video className="w-5 h-5 text-gold-500" />
    </div>
    <h4 className="text-white font-primary text-xl mb-2">Priority Video Conferencing</h4>
    <p className="text-sm text-text-muted mb-6">Secure, encrypted consultations via Zoom/Teams alongside your local attorney.</p>
    <button className="w-full py-3 bg-white/5 hover:bg-gold-500 hover:text-navy-900 border border-gold-500/30 text-gold-500 text-xs font-bold tracking-widest uppercase transition-all">
      Schedule Call
    </button>
  </div>
);

// --- Main Page ---

const NriServices: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative min-h-screen pt-24 pb-20">

      {/* 3D Hero Section */}
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-6">
            <Plane className="w-3 h-3 text-gold-500" />
            <span className="text-gold-500 text-[10px] font-bold tracking-widest uppercase">Global Legal Wing</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-primary font-bold mb-6 leading-tight">
            Bridge the Gap. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              Defend the Legacy.
            </span>
          </h1>
          <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-lg">
            We act as your legal eyes and ears in India. Manage ancestral property, matrimonial disputes, and investments without changing timezones.
          </p>
          <TimezoneWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block h-[500px]"
        >
          <GlobeHero />
        </motion.div>
      </section>

      {/* Feature Heavy Grid */}
      <section className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <h2 className="text-4xl text-white font-primary">Specialized Capabilities</h2>
          <span className="text-text-muted text-sm max-w-md text-right">
            Designed for the unique challenges faced by Non-Resident Indians.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <motion.div
            className="glass-card p-10 hover:bg-white/5 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShieldAlert className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl text-white font-primary mb-3">Illegal Possession Defense</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Immediate injunctive relief against squatters or relatives illegally capturing ancestral land. We initiate criminal trespass proceedings (IPC 441) remotely.
            </p>
            <div className="h-1 w-12 bg-red-500/30 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-red-500"></div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="glass-card p-10 hover:bg-white/5 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FileCheck className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl text-white font-primary mb-3">Power of Attorney Management</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Drafting and registering robust SPAs/GPAs. We ensure your representation is legally binding without your physical presence in court.
            </p>
            <div className="h-1 w-12 bg-blue-500/30 rounded-full overflow-hidden">
              <div className="h-full w-full bg-blue-500"></div>
            </div>
          </motion.div>

          {/* Card 3 (Widget Style) */}
          <VideoConsultWidget />
        </div>

        {/* Dense Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-navy-900/50 p-12 rounded-2xl border border-white/5">
          <div>
            <BadgeCheck className="w-10 h-10 text-gold-500 mb-6" />
            <h2 className="text-3xl text-white font-primary mb-4">The "Zero-Travel" Promise</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              We structure our representation to minimize—and often eliminate—the need for you to travel to India.
            </p>
            <ul className="space-y-4">
              {[
                "Video-conferencing for Evidence recording (where permitted)",
                "Courier-based document execution",
                "Dedicated Case Manager for weekly WhatsApp updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* Abstract Visual */}
            <div className="absolute inset-0 bg-gold-500 blur-[80px] opacity-10"></div>
            <div className="glass-card p-8 relative">
              <h3 className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-6">Active Case Locations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white">Chandigarh High Court</span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white">Supreme Court (Delhi)</span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white">Jalandhar District Court</span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NriServices;
