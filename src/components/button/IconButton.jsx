import 'style/components/button/IconButton.scss'

const LinkButton = ({children, iconName}) => {
    return (<button className={'button link' + ` ${iconName}` }>{children}</button>)
}

export default LinkButton