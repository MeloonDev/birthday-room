import { Stage, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import Pop from "./Pop";
import Room from "./Room";

export default function App() {
  const { color } = useControls({ color: "#333" });

  return (
    <>
      <Perf position="top-left" />

      <color attach="background" args={[color]} />

      <Stage
        intensity={0.5}
        environment="city"
        shadows={{
          normalBias: 0.09,
        }}
        adjustCamera={1.5}
      >
        <PresentationControls
          global
          azimuth={[-0.6, 0.6]}
          polar={[0, 0]}
          snap={{ mass: 3, tension: 200 }}
        >
          <Room />
          <Pop rotation-y={44.8} position={[2.5, 0.54, 2.5]} scale={0.6} />
        </PresentationControls>
      </Stage>
    </>
  );
}
