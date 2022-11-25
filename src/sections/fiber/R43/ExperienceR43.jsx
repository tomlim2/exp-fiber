import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";
import CustomObject from 'threeModels/CustomObject';

import "./r43.scss"

extend({ OrbitControls })

const ExperienceR43 = () => {
    const cubeRef = useRef()
    const sphereRef = useRef()
    const groupRef = useRef()
    const { camera, gl } = useThree()

    return (
        <>
            <directionalLight position={[1, 2, 3]} instensity={1.5} />
            <ambientLight intensity={0.5} />
            <OrbitControls enableDamping={false} makeDefault />

            <CustomObject />
            <group ref={groupRef}>
                <TransformControls position-x={-2} mode="rotate">
                    <mesh ref={sphereRef}>
                        <sphereGeometry />
                        <meshStandardMaterial color={'#999'} />
                        <Html
                            position={[1, 1, 0]}
                            wrapperClass="label-r43-sphere"
                            center
                            distanceFactor={8}
                            occlude={[sphereRef, cubeRef]}
                        >That's a sphere 👍</Html>
                    </mesh>
                </TransformControls>

                <PivotControls object={cubeRef} anchor={[0, 0, 0]} depthTest={false}>
                    <mesh ref={cubeRef} rotation-y={Math.PI * .25} position-x={2} scale={1.5}>
                        <boxGeometry />
                        <meshStandardMaterial color={'#666'} />
                    </mesh>
                </PivotControls>

            </group>

            <mesh position-y={-1} rotation-x={-Math.PI * .5} scale={10}>
                <planeGeometry />
                <MeshReflectorMaterial 
                    resolution={ 512 } 
                    blur={ [ 1000, 1000 ] }
                    mixBlur={ 1 }
                    mirror={ 0.5 }
                    color="#333"
                />
            </mesh>
            <Float speed={ 5 } floatIntensity={ 2 }>
                <Text
                    font="./assets/fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="salmon"
                    position-y={2}
                    maxWidth={2}
                    textAlign="center"
                >
                    I LOVE Bohemian Rhapsody
                    <meshNormalMaterial />
                </Text>
            </Float>
        </>
    )
}

export default ExperienceR43