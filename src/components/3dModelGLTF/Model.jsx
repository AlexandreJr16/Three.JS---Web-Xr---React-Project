/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelXR(props) {
  const { modelLink, scaleObj, position, ...otherProps } = props;
  const { nodes, materials } = useGLTF(modelLink);

  useGLTF.preload(modelLink);

  return (
    <group {...otherProps} dispose={null} scale={scaleObj} position={position}>
      <group>
        {Object.keys(nodes).map((nodeName, index) => (
          <mesh
            key={index}
            castShadow
            receiveShadow
            geometry={nodes[nodeName].geometry}
            material={materials[nodeName]}
          />
        ))}
      </group>
    </group>
  );
}
