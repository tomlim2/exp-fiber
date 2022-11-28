import "style/pages/fiber-page.scss";
import R45 from "sections/fiber/R45/R45";
import R44 from "sections/fiber/R44/R44";
import R43 from "sections/fiber/R43/R43";
import R42 from "sections/fiber/R42/R42";
import EmptySection from "sections/fiber/EmptySection";


const FiberPage = () =>{
    return (
        <div className="page fiber">
            <R45 />
            <R44 />
            <R43 />
            <R42/>
            <EmptySection />
        </div>
    )
}

export default FiberPage