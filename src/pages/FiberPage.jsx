import "style/pages/fiber-page.scss";
import R42 from "sections/fiber/R42/R42";
import EmptySection from "sections/fiber/EmptySection";


const FiberPage = () =>{
    return (
        <div className="page fiber">
            <R42/>
            <EmptySection backgroundColor='#000' sectionIndex={1} />
            <EmptySection backgroundColor='#222' sectionIndex={2} />
            {/* <EmptySection backgroundColor='#444' /> */}
        </div>
    )
}

export default FiberPage