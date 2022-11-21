import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useModel } from "model";

// import { userInfoAtom } from 'store/userStore'
// import { useRecoilState } from 'recoil'
// import { auth } from "firebase.js";

import Header from "components/Header";
import Footer from "components/Footer";

const DefaultLayout = () => {
    // const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)

    const getUserInfo = async () => {
        // auth.onAuthStateChanged(function (user) {
        //     if (user) {
        //         const userCopy = JSON.parse(JSON.stringify(user));
        //         setUserInfo(userCopy)

        //     } else {
        //         setUserInfo(undefined)
                
        //     }
        // });
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout