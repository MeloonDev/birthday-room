import { Text, Stage, PresentationControls } from "@react-three/drei";
import Pop from "./Pop";
import Room from "./Room";

export default function App() {
  return (
    <>
      <color attach="background" args={["#14283E"]} />

      <Stage
        intensity={0.4}
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
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1.5}
            position={[-3.2, 7, 0.8]}
            rotation-y={1.5}
          >
            WSZYSTKIEGO
          </Text>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1.5}
            position={[0.5, 7, -3.4]}
            rotation-y={0.1}
            color={["#D9D6CE"]}
          >
            NAJLEPSZEGO!
          </Text>
        </PresentationControls>
      </Stage>
    </>
  );
}
