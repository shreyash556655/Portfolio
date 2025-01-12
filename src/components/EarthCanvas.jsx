// EarthCanvas.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const EarthCanvas = () => {
  const earth = useGLTF('./stylized_planet/scene.gltf');

  // Cleanup function to dispose of the model when component unmounts
  useEffect(() => {
    return () => {
      if (earth) {
        earth.scenes?.forEach(scene => scene.dispose?.());
        earth.dispose?.();
      }
    };
  }, [earth]);

  return (
    <Canvas 
      className="cursor-pointer" 
      frameloop="demand" 
      camera={{ position: [-4, 3, 10], fov: 60, near: 0.1, far: 200 }}
      dpr={[1, Math.min(2, window.devicePixelRatio)]}
      performance={{ min: 0.5 }}
    >
      <OrbitControls 
        autoRotate 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2} 
        enablePan={false} 
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={earth.scene} scale={4.5} />
    </Canvas>
  );
};

// Preload the model
useGLTF.preload('./stylized_planet/scene.gltf');

export default EarthCanvas;