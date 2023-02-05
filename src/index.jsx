import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";
import Sound from "./Sound";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Sound />
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [5, 1.2, 5],
      }}
    >
      <App />
    </Canvas>
  </>
);
