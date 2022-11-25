import { button, useControls } from 'leva'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";
import { Perf } from 'r3f-perf'

extend({ OrbitControls })

const ExperienceR44 = () => {
    const cubeRef = useRef()
    const groupRef = useRef()
    const { sphPosition, sphColor, sphVisible } = useControls('sphere',{
        sphPosition: {
            value: { x: -2, y: 0, z: 0 },
            min: - 4,
            max: 4,
            step: 0.01
        },
        sphColor: '#777777',
        sphVisible: true,
        myInterval:
        {
            min: 0,
            max: 10,
            value: [4, 5],
        },
        clickMe: button(()=>console.log('ok')),
        choice: { options: [ 'a', 'b', 'c' ] }
    })
    const { cbScale } = useControls('cube',{
        cbScale: {
            value: 1.5,
            min: 0,
            max: 5,
            step: 0.01
        }
    })

    return (
        <>
            <Perf position="top-left" />
            <directionalLight position={[1, 2, 3]} instensity={1.5} />
            <ambientLight intensity={0.5} />

            <group ref={groupRef}>
                <mesh visible={sphVisible} position={[sphPosition.x, sphPosition.y, sphPosition.z]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={sphColor} />
                </mesh>
                <mesh ref={cubeRef} scale={cbScale} rotation-y={Math.PI * .25} position-x={2}>
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

export default ExperienceR44