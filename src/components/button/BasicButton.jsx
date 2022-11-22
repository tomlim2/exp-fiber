import 'style/components/button/button.scss'

const BasicButton = ({children, onClick}) => {
    return (<button onClick={onClick} className="basic">{children}</button>)
}

export default BasicButton