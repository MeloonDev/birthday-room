import { Stage, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Pop from "./Pop";
import Room from "./Room";

export default function App() {
  const { color } = useControls({ color: "#333" });

  return (
    <>
      <OrbitControls makeDefault />

      <Stage
        intensity={0.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color,
          colorBlend: 2,
          opacity: 2,
          normalBias: 0.09,
        }}
        adjustCamera={0.9}
      >
        <Room />
        <Pop rotation-y={44.8} position={[2.5, 0.54, 2.5]} scale={0.6} />
      </Stage>
    </>
  );
}
