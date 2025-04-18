import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Stars Component
const Stars = ({ count = 5000, color = "#f272c8", rotationSpeed = { x: 10, y: 15 }, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / rotationSpeed.x;
      ref.current.rotation.y -= delta / rotationSpeed.y;
    }
  });

  useEffect(() => {
    if (ref.current?.geometry?.attributes?.position) {
      ref.current.geometry.computeBoundingSphere();
    }
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas Component
const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
