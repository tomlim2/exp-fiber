import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";
import CustomObject from 'threeModels/CustomObject';

extend({OrbitControls})

const ExperienceR42 = () => {
    const cubeRef = useRef()
    const groupRef = useRef()
    const {camera, gl} = useThree()

    useFrame((state, delta) => {
        const angle = state.clock.elapsedTime * .1
         console.log(angle);

        state.camera.position.x = Math.sin(angle)*11
        state.camera.position.z = Math.cos(angle)*11
        state.camera.lookAt(0,0,0)
        
        groupRef.current.rotation.y += delta
        cubeRef.current.rotation.y += delta
    })
    return (
        <>
        <directionalLight position={ [ 1, 2, 3 ] } instensity={1.5} />
        <ambientLight intensity={ 0.5 } />
        {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}
        <CustomObject/>
            <group ref={groupRef}>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh>
                <mesh ref={cubeRef} rotation-y={Math.PI * .25} position-x={2} scale={1.5}>
                    <boxGeometry />
                    <meshStandardMaterial color={'mediumpurple'} />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={-Math.PI * .5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={'greenyellow'} />
            </mesh>
        </>
    )
}

export default ExperienceR42