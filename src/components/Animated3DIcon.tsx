import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Box } from "@react-three/drei";
import { Group } from "three";

interface IconSceneProps {
  type: "search" | "share" | "track" | "wallet";
}

function IconScene({ type }: IconSceneProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  if (type === "search") {
    // Magnifying glass representation
    return (
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          {/* Lens */}
          <Torus args={[1, 0.15, 16, 32]} position={[0, 0.3, 0]}>
            <meshStandardMaterial
              color="#06b6d4"
              metalness={0.9}
              roughness={0.1}
              emissive="#06b6d4"
              emissiveIntensity={0.4}
            />
          </Torus>
          {/* Handle */}
          <Box args={[0.15, 1, 0.15]} position={[0.8, -0.7, 0]} rotation={[0, 0, -0.5]}>
            <meshStandardMaterial
              color="#06b6d4"
              metalness={0.8}
              roughness={0.2}
              emissive="#06b6d4"
              emissiveIntensity={0.3}
            />
          </Box>
          {/* Center glow */}
          <Sphere args={[0.3, 32, 32]} position={[0, 0.3, 0]}>
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
          </Sphere>
        </Float>
      </group>
    );
  }

  if (type === "share") {
    // Connected nodes for sharing
    return (
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Center node */}
          <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.9}
              roughness={0.1}
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
            />
          </Sphere>

          {/* Orbiting nodes */}
          {[0, 1, 2].map((i) => {
            const angle = (i / 3) * Math.PI * 2;
            const radius = 1.2;
            return (
              <Sphere
                key={i}
                args={[0.25, 32, 32]}
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
              >
                <meshStandardMaterial
                  color="#8b5cf6"
                  metalness={0.8}
                  roughness={0.2}
                  emissive="#8b5cf6"
                  emissiveIntensity={0.3}
                />
              </Sphere>
            );
          })}
        </Float>
      </group>
    );
  }

  if (type === "track") {
    // Chart/graph representation
    return (
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          {/* Bars */}
          {[0.5, 1, 0.7, 1.2].map((height, i) => (
            <Box
              key={i}
              args={[0.3, height, 0.3]}
              position={[-1 + i * 0.7, height / 2 - 0.6, 0]}
            >
              <meshStandardMaterial
                color="#ec4899"
                metalness={0.9}
                roughness={0.1}
                emissive="#ec4899"
                emissiveIntensity={0.4}
              />
            </Box>
          ))}
          {/* Base line */}
          <Box args={[2.5, 0.1, 0.1]} position={[0, -0.6, 0]}>
            <meshStandardMaterial
              color="#ec4899"
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        </Float>
      </group>
    );
  }

  // type === "wallet"
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Wallet body */}
        <Box args={[1.5, 1, 0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.9}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.4}
          />
        </Box>
        {/* Wallet flap */}
        <Box args={[1.5, 0.4, 0.3]} position={[0, 0.7, 0]}>
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.8}
            roughness={0.2}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </Box>
        {/* Dollar sign */}
        <Torus args={[0.25, 0.08, 16, 32]} position={[0, 0, 0.2]}>
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
  );
}

interface Animated3DIconProps {
  type: "search" | "share" | "track" | "wallet";
}

export function Animated3DIcon({ type }: Animated3DIconProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />

          <IconScene type={type} />
        </Canvas>
      </Suspense>
    </div>
  );
}
