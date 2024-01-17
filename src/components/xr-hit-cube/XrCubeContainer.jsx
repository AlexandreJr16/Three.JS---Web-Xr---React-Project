import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitCube from "./XrHitCube";

const XrCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />

      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrCubeContainer;
