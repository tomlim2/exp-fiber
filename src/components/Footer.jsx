import { Link } from "react-router-dom";

import 'style/components/Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="infos">
                <div className="info main"><Link to={"/"}>Copyright, Tom Lim. All rights reserved.</Link></div>
                <div className="info fiber"><Link to={"/fiber"}>tomandlim@gmail.com</Link> </div>
                <div className="info about"><Link to={"/about"}>Seoul, South Korea</Link> </div>
            </div>
        </div>
    )
}

export default Footer