import 'style/components/button/LinkButton.scss'

const LinkButton = ({children, onClick}) => {
    return (<button onClick={onClick} className="button link">{children}</button>)
}

export default LinkButton