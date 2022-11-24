import { useModel } from "model";
import { isSpotifyLoginAtom } from "store/spotifyStore";
import { useRecoilState } from "recoil";

import BasicButton from "components/button/BasicButton";

const SpotifyLoginStatus = () => {
    const model = useModel()
    const [isLogin, setIsLogin] = useRecoilState(isSpotifyLoginAtom)

    const signInSpotify = () => {
        model.spotify.signIn()
    }

    const signOutSoptify = () => {
        setIsLogin(false)
        window.localStorage.removeItem('spotify/accessToken');
    }
    
    return (
        <section className="stotify-login-status">
            isSignIn: {String(isLogin)}
            <br/><br/>
            <BasicButton onClick={() => signInSpotify()} isDisabled={isLogin}>Login to Spotify</BasicButton>
            <br/>
            <BasicButton onClick={() => signOutSoptify()} isDisabled={!isLogin}>Logout</BasicButton>
        </section>
    )
}

export default SpotifyLoginStatus