import 'style/components/button/button.scss'

const BasicButton = ({children, onClick, isDisabled=false}) => {
    return (<button onClick={onClick} className="basic" disabled={isDisabled}>{children}</button>)
}

export default BasicButton