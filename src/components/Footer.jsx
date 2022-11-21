import LinkText from "./text/LinkText";

import 'style/components/Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="infos">
                <div className="info main">Copyright, Tom Lim. All rights reserved</div>
                <div className="info fiber"><LinkText linkUrl={"tomandlim@gmail.com"} linkType='email'>tomandlim@gmail.com</LinkText> </div>
                <div className="info about">Seoul, South Korea</div>
            </div>
        </div>
    )
}

export default Footer