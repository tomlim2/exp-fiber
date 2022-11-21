import { Canvas } from "@react-three/fiber"
import Meshes from "./Meshes"
import FiberSectionWrapper from "sections/fiber/FiberSectionWrapper"

import "style/sections/fiber/fiber-section.scss"

const R42 = () =>{
    return (
        <FiberSectionWrapper>
            <Canvas>
                <Meshes />
            </Canvas>
        </FiberSectionWrapper>
    )
}

export default R42