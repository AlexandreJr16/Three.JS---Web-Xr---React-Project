import { Canvas } from "@react-three/fiber";
import CubeXr from "./CubeXR";
import { ARButton, XR } from "@react-three/xr";

const CubeContainerXr = () => {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <CubeXr />
        </XR>
      </Canvas>
    </>
  );
};

export default CubeContainerXr;
