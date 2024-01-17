/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const CubeXr = () => {
  const cubeXrRef = useRef();
  useFrame((state, delta) => {
    cubeXrRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeXrRef} position-z={-5}>
        <boxGeometry />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default CubeXr;
