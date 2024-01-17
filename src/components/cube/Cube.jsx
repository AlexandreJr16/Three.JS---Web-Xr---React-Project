import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Cube = () => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default Cube;
