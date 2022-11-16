import { Link } from "react-router-dom";

import 'components/style/Header.scss'

const Header = () => {
    return (
        <div className="header">
            <nav className="navigation">
                <div className="menu main"><Link to={"/"}>ysLim</Link></div>
                <div className="menu fiber"><Link to={"/fiber"}>Fibers</Link> </div>
                <div className="menu about"><Link to={"/about"}>About</Link> </div>
            </nav>
        </div>
    )
}

export default Header