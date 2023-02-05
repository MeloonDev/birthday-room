import {
  useAnimations,
  useGLTF,
  OrbitControls,
  Stage,
  Clone,
} from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import { Model } from "./Model";
import Pop from "./Pop";
import Room from "./Room";

export default function Experience(props) {
  const { color } = useControls({ color: "#333" });

  return (
    <>
      <color attach="background" args={[color]} />

      <OrbitControls makeDefault />

      {/* <ambientLight intensity={0.1} />
      <spotLight
        castShadow
        shadow-normalBias={0.15}
        position={[6, 5, 7]}
        intensity={1}
      /> */}

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
        // normalBias={0.04}
        adjustCamera={0.9}
      >
        {/* <mesh castShadow receiveShadow rotation-x={-Math.PI / 2} scale={5}>
          <planeGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <Room />
        <Pop rotation-y={44.8} position={[2.5, 0.54, 2.5]} scale={0.6} />
        {/* <Model /> */}
      </Stage>
    </>
  );
}
