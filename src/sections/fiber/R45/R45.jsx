import { Canvas } from "@react-three/fiber"
import { Leva } from 'leva'

import FiberSectionWrapper from "sections/fiber/FiberSectionWrapper"
import ExperienceR45 from "sections/fiber/R45/ExperienceR45"

const R45 = () => {
    const created = () => {
        console.log('r45 created')
    }
    
    return (
        <FiberSectionWrapper>
            <Leva collapsed />
            <Canvas onCreated={created}>
                <ExperienceR45 />
            </Canvas>
        </FiberSectionWrapper>
    )
}

export default R45