import { useGLTF } from "@react-three/drei";

export default function Room(props) {
  const { nodes, materials } = useGLTF("./model/birthdayRoom.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials["Material.011"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials["Material.011"]}
      />
      <group position={[-1.62, 0.5, -2.91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.004"]}
          position={[0, 1.29, 0.25]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.006"]}
        position={[-2.46, 0.63, 1.17]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.007"]}
          position={[2.08, 0, -2.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.007"]}
          position={[2.08, 0, -1.36]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.007"]}
          position={[2.8, 0, 1.36]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Material.007"]}
          position={[2.8, 0, 2.58]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials["Material.007"]}
          position={[-0.79, 0, 2.58]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials["Material.007"]}
          position={[-0.79, 0, -2.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[0, 0, -0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.006"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.008"]}
        position={[-3.5, 4.51, -0.54]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials["Material.008"]}
          position={[0, 0.08, -0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.009"]}
          position={[0, 0.36, -0.36]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.006"]}
        position={[-2.83, 1.58, -1.18]}
        rotation={[0.02, -0.33, 0.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.015"]}
      />
      <group position={[2.13, 0.97, -2.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[2.13, 0.74, -2.07]} rotation={[0, -0.46, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.002"]}
          position={[-0.01, -0.01, -0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.002"]}
          position={[-0.06, -0.01, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials["Material.005"]}
        position={[2.13, 0.97, -2.07]}
        rotation={[0.18, -0.02, -0.03]}
      />
      <group position={[2.13, 0.97, -2.07]} rotation={[1.01, 1.36, -1.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials["Material.005"]}
        position={[2.13, 0.97, -2.07]}
        rotation={[0.03, 0.09, 0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials["Material.005"]}
        position={[2.13, 0.97, -2.07]}
        rotation={[-0.18, -0.09, -0.11]}
      />
      <group position={[2.13, 0.97, -2.07]} rotation={[-2.34, 1.27, 2.44]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[2.13, 0.97, -2.07]} rotation={[3, 0.65, 3.14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_10.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.014"]}
        position={[-2.88, 1.57, -0.66]}
        rotation={[0.02, 0.15, 0.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.014"]}
        position={[-2.83, 1.57, 3.25]}
        rotation={[0.03, 0.53, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.014"]}
        position={[-2.41, 1.57, 3.35]}
        rotation={[0.07, 1.22, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
      />
      <group position={[-3.5, 4.07, 2.93]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[-3.5, 4.07, 2.02]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[-3.5, 4.07, 1.12]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials["Material.013"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./model/birthdayRoom.glb");
