import { Link } from "react-router-dom";
import "style/components/text/text.scss"

const LinkText = ({linkUrl, linkType = 'internal', children}) => {
    const linkTypes = {
        internal: <Link className="text link" to={linkUrl}>{children}</Link>,
        external: <a className="text link" href={linkUrl}>{children}</a>,
        email: <a className="text link" href={`mailto:${linkUrl}`}>{children}</a>
    }

    return linkTypes[linkType]
}

export default LinkText