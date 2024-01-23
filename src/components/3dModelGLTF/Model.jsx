/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React from "react";
import { useGLTF } from "@react-three/drei";

export function ModelXR(props) {
  const { modelLink, scaleObj, position, ...otherProps } = props;
  const { nodes } = useGLTF(modelLink);

  return (
    <group {...otherProps} scale={scaleObj} position={position}>
      {Object.values(nodes).map((node, index) => (
        <mesh key={index} castShadow receiveShadow geometry={node.geometry}>
          {node.material ? <meshStandardMaterial {...node.material} /> : null}
        </mesh>
      ))}
    </group>
  );
}
