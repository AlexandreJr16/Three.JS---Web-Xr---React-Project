import { Routes, Route } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/cube/CubeContainer";
import CubeContainerXr from "./components/xr-cube/CubeContainerXr";
import XrCubeContainer from "./components/xr-hit-cube/XrCubeContainer";
import XrModelContainer from "./components/3dModelGLTF/XrModelContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CubeContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
      <Route path="/xr-cube" element={<CubeContainerXr />} />
      <Route path="/hit-cube" element={<XrCubeContainer />} />
      <Route path="/hit-model" element={<XrModelContainer />} />
    </Routes>
  );
}

export default App;
