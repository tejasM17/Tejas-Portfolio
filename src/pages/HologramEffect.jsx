import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

export const HologramModel = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <motion.mesh
      ref={meshRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateY: Math.PI * 2 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#00f0ff"
        distort={0.4}
        speed={3}
        wireframe
        transparent
        opacity={0.8}
      />
    </motion.mesh>
  );
};

const HologramSphere = () => {
  const sphereRef = useRef(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshBasicMaterial
        color="#9900ff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const HologramCore = () => {
  const coreRef = useRef(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={coreRef}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <meshPhongMaterial
        color="#ff00c3"
        emissive="#ff00c3"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const HologramEffect = () => {
  return (
    <div className="w-full h-full relative  rounded-xl overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b  z-0" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00c3" />
        <HologramModel />
        <HologramSphere />
        <HologramCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HologramEffect;
