import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Pop(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./model/pop.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.ArmatureAction.play();
    actions.CircleAction.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 0.86, 0]} scale={0.47}>
          <primitive object={nodes.spine1} />
          <group name="Cube004">
            <skinnedMesh
              name="Cube005_1"
              geometry={nodes.Cube005_1.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Cube005_1.skeleton}
            />
            <skinnedMesh
              name="Cube005_2"
              geometry={nodes.Cube005_2.geometry}
              material={materials["Material.005"]}
              skeleton={nodes.Cube005_2.skeleton}
            />
            <skinnedMesh
              name="Cube005_3"
              geometry={nodes.Cube005_3.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Cube005_3.skeleton}
            />
            <group name="Circle" position={[-0.04, 2.8, 1.6]} scale={2.15}>
              <mesh
                name="Circle_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                name="Circle_2"
                castShadow
                receiveShadow
                geometry={nodes.Circle_2.geometry}
                material={materials["Material.007"]}
              />
              <mesh
                name="Circle_3"
                castShadow
                receiveShadow
                geometry={nodes.Circle_3.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                name="Circle_4"
                castShadow
                receiveShadow
                geometry={nodes.Circle_4.geometry}
                material={materials.Material}
              />
              <mesh
                name="Circle_5"
                castShadow
                receiveShadow
                geometry={nodes.Circle_5.geometry}
                material={materials["Material.008"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./model/pop.glb");
