import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfoAtom, isLoginState } from 'store/userStore'

import DataText from 'components/text/DataText'

const LoginChecker = () => {

    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)
    const isLogin = useRecoilValue(isLoginState)

    return (
        <>
            <div>
                <div>email: <DataText text={userInfo && userInfo.email} /></div>
                <div>isLogin: <DataText text={String(isLogin)} /></div>
            </div>
        </>)
}

export default LoginChecker