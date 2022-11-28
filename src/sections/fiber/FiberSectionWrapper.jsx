import { useRef } from "react"
import { useState } from "react";
import { useEffect } from "react"

import "style/sections/fiber/fiber-section.scss"

const FiberSectionWrapper = ({ children }) => {
    const sectionRef = useRef(null);
    const [isSectionInit, setIsSectionInit] = useState(false);

    const renderSection = () => {
        const sectionDOM = sectionRef.current;
        const sectionIndex = sectionDOM.offsetTop / window.innerHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const flow = Math.round(scrollTop / innerHeight + .2)

        if (flow == sectionIndex) {
            setIsSectionInit(true)
        } else {
            setIsSectionInit(false)
        }
    }

    useEffect(() => {
        renderSection()
        window.addEventListener('scroll', renderSection)

        return () => {
            window.removeEventListener('scroll', renderSection)
        }
    }, [])

    return (
        <section className="section fiber" ref={sectionRef}>
            <div className={`content${isSectionInit ? ` init` : ''}`}>
                {isSectionInit && children}
            </div>
        </section>
    )
}

export default FiberSectionWrapper