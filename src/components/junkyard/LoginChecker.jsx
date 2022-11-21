import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfoAtom, isLoginState } from 'store/userStore'

import Text from 'components/text/Text'

const LoginChecker = () => {

    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)
    const isLogin = useRecoilValue(isLoginState)

    return (
        <>
            <div>
                <div>email: <Text text={userInfo && userInfo.email} /></div>
                <div>isLogin: <Text text={String(isLogin)} /></div>
            </div>
        </>)
}

export default LoginChecker