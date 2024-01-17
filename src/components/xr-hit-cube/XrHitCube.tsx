import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import React, { useRef, useState } from "react";
import { Mesh, RingGeometry } from "three";
import Cube from "./Cube";
import { useThree } from "@react-three/fiber";

const XrHitCube = () => {
  const reticleRef = useRef<Mesh>({} as Mesh);
  const [cubes, setCubes] = useState([]);
  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes([...cubes, { position, id }]);
  };
  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        cubes.map(({ position, id }) => {
          return <Cube key={id} position={position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Cube position={undefined} />}
    </>
  );
};

export default XrHitCube;
