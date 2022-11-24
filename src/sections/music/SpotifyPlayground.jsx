import { useModel } from "model";

import BasicButton from "components/button/BasicButton";
import SpotifyPlayer from "components/music/SpotifyPlayer";
import { useState } from "react";

const SpotifyPlayground = () => {
    const model = useModel()
    const [item, setItem] = useState()
    const [isPlaying, setIsPlaying] = useState()
    const [progessMs, setProgressMs] = useState()

    const getUserData = async () => {
        const res = await model.spotify.getUserData()
        console.log(res);
    }

    const getPlaybackState = async () => {
        const res = await model.spotify.getPlaybackState()
        setItem(res.item)
        setIsPlaying(res.is_playing)
        setProgressMs(res.progress_ms)
        console.log(res);
    }

    return (
        <section className="stotify-playground">
            <BasicButton onClick={()=>getUserData()}>get info</BasicButton>
            <BasicButton onClick={()=>getPlaybackState()}>getPlaybackState</BasicButton>
            {item && <SpotifyPlayer item={item} isPlaying={isPlaying} progressMs={progessMs} />}
        </section>
    )
}

export default SpotifyPlayground