import SpotifyLoginStatus from "sections/music/SpotifyLoginStatus";
import SpotifyPlayground from "sections/music/SpotifyPlayground"

import "style/pages/music-page.scss";


const MusicPage = () =>{
    
    
    return (
        <div className="page music">
            <SpotifyLoginStatus />
            <SpotifyPlayground />
        </div>
    )
}

export default MusicPage