import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei";
import { Group } from "three";

interface GeometrySceneProps {
  variant?: "sphere" | "cube" | "torus" | "multi";
}

function GeometryScene({ variant = "sphere" }: GeometrySceneProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  if (variant === "multi") {
    return (
      <group ref={groupRef}>
        {/* Central sphere */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#06b6d4"
              metalness={0.9}
              roughness={0.1}
              distort={0.4}
              speed={2}
              emissive="#06b6d4"
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>

        {/* Orbiting cubes */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const radius = 3;
          return (
            <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={1} floatIntensity={0.3}>
              <Box
                args={[0.5, 0.5, 0.5]}
                position={[
                  Math.cos(angle) * radius,
                  Math.sin(angle * 2) * 0.5,
                  Math.sin(angle) * radius,
                ]}
              >
                <meshStandardMaterial
                  color={i % 2 === 0 ? "#8b5cf6" : "#ec4899"}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={i % 2 === 0 ? "#8b5cf6" : "#ec4899"}
                  emissiveIntensity={0.2}
                />
              </Box>
            </Float>
          );
        })}

        {/* Outer torus */}
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
          <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={1}
              roughness={0}
              transparent
              opacity={0.6}
              emissive="#8b5cf6"
              emissiveIntensity={0.3}
            />
          </Torus>
        </Float>
      </group>
    );
  }

  if (variant === "cube") {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <Box args={[2, 2, 2]} ref={groupRef}>
          <MeshDistortMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            distort={0.3}
            speed={2}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </Box>
      </Float>
    );
  }

  if (variant === "torus") {
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Torus args={[2, 0.6, 32, 100]} ref={groupRef}>
          <MeshDistortMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            distort={0.3}
            speed={2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </Torus>
      </Float>
    );
  }

  // Default: sphere
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[2, 64, 64]} ref={groupRef}>
        <MeshDistortMaterial
          color="#06b6d4"
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
          emissive="#06b6d4"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
  );
}

export function FloatingGeometry({ variant = "sphere" }: GeometrySceneProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />

          <GeometryScene variant={variant} />
        </Canvas>
      </Suspense>
    </div>
  );
}
