"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as THREE from "three";

function Avatar({ isPaused }: { isPaused: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = Object.values(actions)[0];
      if (firstAnimation) {
        if (isPaused) {
          firstAnimation.paused = true;
          firstAnimation.time = firstAnimation.getClip().duration;
        } else {
          firstAnimation.paused = false;
          firstAnimation.reset().fadeIn(0.5).play();
        }
      }
    }
  }, [isPaused, actions]);
  
  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={1.6}
        position={[0, -2.0, 0]}
      />
    </group>
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

function Scene({ isPaused }: { isPaused: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <Suspense fallback={<AvatarFallback />}>
        <Avatar isPaused={isPaused} />
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
  const [isPaused, setIsPaused] = useState(false);

  const handleClick = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="h-[500px] w-[500px] md:h-[600px] md:w-[600px] cursor-pointer"
        onClick={handleClick}
      >
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Scene isPaused={isPaused} />
        </ErrorBoundary>
      </div>
      <p className="text-xs text-muted-foreground/50">
        {isPaused ? "Click to play" : "Click to pause"}
      </p>
    </div>
  );
}

// Preload the model
useGLTF.preload("/avatar.glb");
