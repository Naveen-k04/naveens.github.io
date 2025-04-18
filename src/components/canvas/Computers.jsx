import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Your custom loader component

const Computers = ({ isMobile }) => {
  // ✅ Correct path for public folder access
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.3 : 0.75} // Adjusted scale for mobile
        position={isMobile ? [0, -1, -3] : [0, -3.25, -3]} // Adjusted position for mobile
        rotation={[-0.01, -0.2, -0.1]} // Minor rotation for better view
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens based on window size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]} // Set device pixel ratio for higher quality on retina displays
      camera={{
        position: isMobile ? [4, 4, 6] : [10, 10, 15], // Adjusted camera position for mobile
        fov: isMobile ? 30 : 50, // Field of view adjusted for mobile
      }}
      gl={{ preserveDrawingBuffer: true }} // Keep the drawing buffer for proper rendering
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false} // Disable zoom for better mobile experience
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2} // Limit vertical rotation
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
