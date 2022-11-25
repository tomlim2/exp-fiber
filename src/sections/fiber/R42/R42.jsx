
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import ExperienceR42 from "sections/fiber/R42/ExperienceR42"
import FiberSectionWrapper from "sections/fiber/FiberSectionWrapper"

import "style/sections/fiber/fiber-section.scss"

const R42 = () => {
    const cameraSettings = {
        fov: 45, zoom: 100, near: 0.1, far: 200, position: [3, 4, 2]
    }
    const glSettings = {
        antialias: false,
        // toneMapping: THREE.CineonToneMapping
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
        // outputEncoding: THREE.LinearEncoding
    }
    return (
        <FiberSectionWrapper>
            <Canvas orthographic dpr={ [1, 2] } camera={cameraSettings} gl={glSettings}>
                <ExperienceR42 />
            </Canvas>
        </FiberSectionWrapper>
    )
}

export default R42