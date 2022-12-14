import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { userInfoAtom } from 'store/userStore'
import { isSpotifyLoginAtom } from 'store/spotifyStore'
import { useSetRecoilState } from 'recoil'
import { auth } from "firebase.js";

import Header from "components/Header";
import Footer from "components/Footer";

const key = 'spotify/accessToken'

const DefaultLayout = () => {
    const setUserInfo = useSetRecoilState(userInfoAtom)
    const setIsSpotifyLogin = useSetRecoilState(isSpotifyLoginAtom)

    const getUserInfo = async () => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                const userCopy = JSON.parse(JSON.stringify(user));
                setUserInfo(userCopy)

            } else {
                setUserInfo(undefined)

            }
        });
    }

    const checkSpotify = () => {
        const hasToken = Boolean(window.localStorage.getItem(key));
        if (hasToken) {
            setIsSpotifyLogin(true)
        } else {
            setIsSpotifyLogin(false)
        }
    }

    useEffect(() => {
        getUserInfo()
        checkSpotify()
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