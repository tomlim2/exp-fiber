import 'style/components/button/button.scss'

const LinkButton = ({children, iconName}) => {
    return (<button className={'button link' + ` ${iconName}` }>{children}</button>)
}

export default LinkButton