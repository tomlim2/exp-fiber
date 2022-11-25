import { Canvas } from "@react-three/fiber"
import { Leva } from 'leva'

import FiberSectionWrapper from "sections/fiber/FiberSectionWrapper"
import ExperienceR44 from "sections/fiber/R44/ExperienceR44"

const R44 = () => {
    return (
        <FiberSectionWrapper>
            
            <Leva collapsed/>
            <Canvas>
                <ExperienceR44/>
            </Canvas>
        </FiberSectionWrapper>

    )
}

export default R44