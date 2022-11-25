import "style/pages/fiber-page.scss";
import R42 from "sections/fiber/R42/R42";
import R43 from "sections/fiber/R43/R43";
import EmptySection from "sections/fiber/EmptySection";


const FiberPage = () =>{
    return (
        <div className="page fiber">
            <R43 />
            <R42/>

            <EmptySection />
            {/* <EmptySection backgroundColor='#444' /> */}
        </div>
    )
}

export default FiberPage