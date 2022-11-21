import 'style/components/button/button.scss'

const LinkButton = ({children, onClick}) => {
    return (<button onClick={onClick} className="link">{children}</button>)
}

export default LinkButton