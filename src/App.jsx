import { Routes, Route } from "react-router-dom";
import "./App.css";

import XrModelContainer from "./components/3dModelGLTF/XrModelContainer";

function App() {
  return (
    <Routes>
      <Route path="/hit-model" element={<XrModelContainer />} />
    </Routes>
  );
}

export default App;
