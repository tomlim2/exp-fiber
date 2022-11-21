import LinkText from './text/LinkText'

import 'style/components/Header.scss'

const Header = () => {
    return (
        <div className="header">
            <nav className="navigation">
                <div className="menu main"><LinkText linkUrl={"/"}>ysLim</LinkText></div>
                <div className="menu about"><LinkText linkUrl={"/about"}>About</LinkText> </div>
            </nav>
        </div>
    )
}

export default Header