"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Avatar() {
  const { scene } = useGLTF("/avatar.glb");
  
  return (
    <primitive 
      object={scene} 
      scale={1.6}
      position={[0, -2.0, 0]}
    />
  );
}

function AvatarFallback() {
  return (
    <mesh>
      <capsuleGeometry args={[0.5, 1, 4, 8]} />
      <meshStandardMaterial color="#06b6d4" wireframe />
    </mesh>
  );
}

function ErrorFallback() {
  return (
    <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-muted flex items-center justify-center">
      <span className="text-muted-foreground text-center px-4">3D Avatar</span>
    </div>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <Suspense fallback={<AvatarFallback />}>
        <Avatar />
        <Environment preset="city" />
      </Suspense>
      
      <ContactShadows 
        position={[0, -2.0, 0]} 
        opacity={0.4} 
        blur={2} 
        far={4}
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}

export default function Avatar3D() {
  return (
    <div className="h-[500px] w-[500px] md:h-[600px] md:w-[600px]">
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Scene />
      </ErrorBoundary>
    </div>
  );
}

// Preload the model
useGLTF.preload("/avatar.glb");
