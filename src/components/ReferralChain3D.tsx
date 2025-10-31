import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { Vector3, BufferGeometry, Group, Points } from "three";
import { TrendingUp } from "lucide-react";

function Chain() {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const nodes = [
    { position: [0, 0, 0] as [number, number, number], scale: 1.2, color: "#3b82f6" },
    { position: [2.5, 1.5, -1] as [number, number, number], scale: 0.9, color: "#8b5cf6" },
    { position: [-2.5, 1.5, -1] as [number, number, number], scale: 0.9, color: "#8b5cf6" },
    { position: [2.5, -1.5, 1] as [number, number, number], scale: 0.7, color: "#ec4899" },
    { position: [-2.5, -1.5, 1] as [number, number, number], scale: 0.7, color: "#ec4899" },
    { position: [4.5, 0, -2] as [number, number, number], scale: 0.5, color: "#f59e0b" },
    { position: [-4.5, 0, -2] as [number, number, number], scale: 0.5, color: "#f59e0b" },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 6]
  ];

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      {connections.map(([from, to], idx) => {
        const start = new Vector3(...nodes[from].position);
        const end = new Vector3(...nodes[to].position);
        const points = [start, end];
        const lineGeometry = new BufferGeometry().setFromPoints(points);
        
        return (
          <line key={`line-${idx}`} geometry={lineGeometry}>
            <lineBasicMaterial 
              color="#8b5cf6" 
              linewidth={2}
              transparent
              opacity={0.6}
            />
          </line>
        );
      })}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <Float
          key={idx}
          speed={1.5 + idx * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Sphere
            position={node.position}
            args={[node.scale * 0.5, 32, 32]}
            onPointerOver={() => setHovered(idx)}
            onPointerOut={() => setHovered(null)}
          >
            <MeshDistortMaterial
              color={hovered === idx ? "#ffffff" : node.color}
              speed={2}
              distort={0.3}
              radius={1}
              metalness={0.8}
              roughness={0.2}
              emissive={node.color}
              emissiveIntensity={hovered === idx ? 0.8 : 0.3}
            />
          </Sphere>
          
          {/* Glow effect */}
          <Sphere
            position={node.position}
            args={[node.scale * 0.6, 32, 32]}
          >
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

function RotatingCoin() {
  const coinRef = useRef<Group>(null);
  const particlesRef = useRef<Points>(null);

  useFrame((state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.01;
      coinRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.002;
    }
  });

  // Create particle system
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }

  return (
    <group>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#8b5cf6"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <group ref={coinRef}>
        {/* Main Coin Body */}
        <mesh castShadow>
          <cylinderGeometry args={[2, 2, 0.3, 64]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.9}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Coin Edge Ring */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[2, 0.15, 16, 64]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Center Emblem - Front */}
        <mesh position={[0, 0, 0.16]}>
          <circleGeometry args={[0.8, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Center Emblem - Back */}
        <mesh position={[0, 0, -0.16]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.8, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Inner decorative rings */}
        {[1.2, 1.5].map((radius, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.03, 16, 64]} />
            <meshBasicMaterial
              color={i === 0 ? "#ec4899" : "#f59e0b"}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}

        {/* Rotating outer ring */}
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.5, 0.05, 16, 64]} />
            <meshBasicMaterial
              color="#8b5cf6"
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <TrendingUp size={48} className="text-white" />
          </div>
        </div>
        <p className="text-muted-foreground text-sm">Loading 3D Model...</p>
      </div>
    </div>
  );
}

interface ReferralChain3DProps {
  variant?: "chain" | "coin";
}

export function ReferralChain3D({ variant = "chain" }: ReferralChain3DProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />

          {/* 3D Model */}
          {variant === "chain" ? <Chain /> : <RotatingCoin />}

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
