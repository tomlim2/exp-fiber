import { useNavigate } from "react-router-dom";
import LinkButton from "components/button/LinkButton"
import "style/pages/main-page.scss";

const MainPage = () => {
    const navigate = useNavigate()
    const navigateTo = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className="page main">
            <section className="hero">
                
            </section>
            <section className="section">
                <LinkButton onClick={()=>navigateTo('etc')}>Etc</LinkButton>
            </section>
            <section className="section">
                <LinkButton onClick={()=>navigateTo('fiber')}>Fiber</LinkButton>
            </section>
        </div>
    )
}

export default MainPage;