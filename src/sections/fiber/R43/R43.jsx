import { Canvas } from "@react-three/fiber"
import FiberSectionWrapper from "sections/fiber/FiberSectionWrapper"
import ExperienceR43 from "sections/fiber/R43/ExperienceR43"

const R43 = () => {
    return (
        <FiberSectionWrapper>
            <Canvas>
                <ExperienceR43/>
            </Canvas>
        </FiberSectionWrapper>

    )
}

export default R43