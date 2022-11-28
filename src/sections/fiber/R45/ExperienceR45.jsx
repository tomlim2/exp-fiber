import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";
import { Perf } from 'r3f-perf'

extend({ OrbitControls })

const ExperienceR45 = () => {
    const cubeRef = useRef()
    const groupRef = useRef()
    return (
        <>
            <Perf position="top-left" />
            <directionalLight position={[1, 2, 3]} instensity={1.5} />
            <ambientLight intensity={0.5} />

            <group ref={groupRef}>
                <mesh position={[-2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={'#777'} />
                </mesh>
                <mesh ref={cubeRef} scale={1.5} rotation-y={Math.PI * .25} position-x={2}>
                    <boxGeometry />
                    <meshStandardMaterial color={'#555'} />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={-Math.PI * .5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={'#333'} />
            </mesh>
        </>
    )
}

export default ExperienceR45