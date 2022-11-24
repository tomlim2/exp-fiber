import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isSpotifyLoginAtom } from "store/spotifyStore";
import { useRecoilState } from "recoil";

import "style/pages/signin-page.scss";

const key = 'spotify/accessToken'

const SigninRedirectPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isSpotifyLogin, setIsSpotifyLogin] = useRecoilState(isSpotifyLoginAtom);
    
    const setAccessToken = () => {
        let accessToken = undefined
        if(params.platformName == 'spotify'){
            if(location.hash && location.hash.startsWith('#access_token')){
                const tokenInfos = location.hash.split('&')[0];
                accessToken = tokenInfos.split('=')[1];
            }
        }
        window.localStorage.setItem(key, accessToken);
        setIsSpotifyLogin(true)
        navigate('/music')
    }

    useEffect(() => {
        setAccessToken()
    }, [])
    
    return (
        <div className="page signin">
        </div>
    )
}

export default SigninRedirectPage;