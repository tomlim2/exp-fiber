import "style/components/music/spotify-player.scss"

const SpotifyPlayer = ({item, isPlaying, progressMs}) => {
    const backgroundStyles = {
        backgroundImage: `url(${item.album.images[0].url})`,
    };

    const progressBarStyles = {
        width: (progressMs * 100 / item.duration_ms) + '%'
    };

    return (
        <div className="stotify-player">
            <div className="main-wrapper">
                <div className="now-playing__img">
                    <img src={item.album.images[0].url} />
                </div>
                <div className="now-playing__side">
                    <div className="now-playing__name">{item.name}</div>
                    <div className="now-playing__artist">
                        {item.artists[0].name}
                    </div>
                    <div className="now-playing__status">
                        {isPlaying ? "Playing" : "Paused"}
                    </div>
                    <div className="progress">
                        <div
                            className="progress__bar"
                            style={progressBarStyles}
                        />
                    </div>
                </div>
                <div className="background" style={backgroundStyles} />{" "}
            </div>
        </div>
    )
}

export default SpotifyPlayer