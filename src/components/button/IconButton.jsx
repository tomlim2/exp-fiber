import 'style/components/button/button.scss'
import InstagramSvg from 'components/svg/InstagramSvg'
import LinkedInSvg from 'components/svg/LinkedInSvg'
import GithubSvg from 'components/svg/GithubSvg'

const IconButton = ({ iconName, color, size, linkUrl = undefined }) => {
    const iconList = {
        instagram: <InstagramSvg className='icon' color={color} size={size} />,
        linkedIn: <LinkedInSvg className='icon' color={color} size={size} />,
        github: <GithubSvg className='icon' color={color} size={size} />,
    }

    const navigateTo = (url) => {
        if(url){
            window.open(url, '_blank')
        } else return
    }

    return (<button className='icon' onClick={()=>navigateTo(linkUrl)}>{iconList[iconName]}</button> )
}

export default IconButton