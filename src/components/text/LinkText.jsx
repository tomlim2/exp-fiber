import { Link } from "react-router-dom";
import "style/components/text/text.scss"

const LinkText = ({navigateTo, linkType = 'internal', children}) => {
    const linkTypes = {
        internal: <Link className="text link" to={navigateTo}>{children}</Link>,
        external: <a className="text link" href={navigateTo}>{children}</a>,
        email: <a className="text link" href={`mailto:${navigateTo}`}>{children}</a>
    }

    console.log(linkTypes[linkType], linkType);

    return linkTypes[linkType]
}

export default LinkText