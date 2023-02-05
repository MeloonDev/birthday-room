import { Stage, OrbitControls } from "@react-three/drei";
import Pop from "./Pop";
import Room from "./Room";

export default function App() {
  return (
    <>
      <OrbitControls makeDefault />

      <Stage intensity={0.5} environment="city" adjustCamera={0.9}>
        <Room />
        <Pop rotation-y={44.8} position={[2.5, 0.54, 2.5]} scale={0.6} />
      </Stage>
    </>
  );
}
