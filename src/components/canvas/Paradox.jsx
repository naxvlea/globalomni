import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Paradox = ({ isMobile }) => {
  const model = useGLTF("/paradox.glb");

  const group = useRef();
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={group}
      position={[0, 0, 0]}
      rotation={[1.5, isMobile ? 2 : 0, 0]}
      scale={isMobile ? 0.4 : 0.7}
    >
      <primitive object={model.scene} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 5, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={3}
          fade
        />
        <ambientLight intensity={0.1} color="#AB7843" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#AB7843" />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={1.0}
          color="#AB7843"
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={1}
          color="#AB7843"
        />
        <spotLight position={[0, 0, 10]} intensity={1} color={"#AB7843"} />
        <Paradox key={isMobile ? "mobile" : "desktop"} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
