import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlassShards = () => {
  const count = 200; // Increased to 200 as requested
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate shards with a wider spread
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -80 + Math.random() * 160; // Wider spread X
      const yFactor = -80 + Math.random() * 160; // Wider spread Y
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useLayoutEffect(() => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        dummy.position.set(particle.xFactor, particle.yFactor, particle.zFactor);
        dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        dummy.scale.setScalar(1 + Math.random());
        dummy.updateMatrix();
        mesh.current!.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [dummy, particles]);

  useFrame((state, delta) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        t = particle.t += speed / 2;
        const a = Math.cos(t) + Math.sin(t * 1) / 10;
        const b = Math.sin(t) + Math.cos(t * 2) / 10;
        const s = Math.cos(t);

        // Gentle floating movement
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        dummy.scale.setScalar(1 + s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();
        mesh.current!.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.3, 0]} /> {/* Diamond/Shard shape */}
      <meshPhysicalMaterial
        color="#c9a050"
        emissive="#aa833e"
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.6}
        transmission={0.4} // Glass effect
        thickness={1} // Refraction
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-[#020c1b] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#c9a050" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />

        <GlassShards />
      </Canvas>
      {/* Reduced vignette as requested for transparency */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020c1b_100%)] opacity-40"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default ThreeBackground;
