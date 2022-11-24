import Axios from "axios"

class spotifyModel {
    constructor() {
        this.key = 'spotify/accessToken'
        this.baseUrl = 'https://api.spotify.com/v1/'
    }

    setAccessToken = () => {
        const accessToken = window.localStorage.getItem(this.key)
        return accessToken
    }

    setHeader = () => {
        const accessToken = this.setAccessToken()
        const headers = {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }
        return headers
    }

    GET = async (path) => {
        const response = await Axios.get(this.baseUrl + path, this.setHeader())
        return response.data
    }

    getUserData = async () => {
        const result = this.GET('me')
        return result
    }

    getPlaybackState = async () => {
        const result = this.GET('me/player')
        return result
    }

    signIn = async () => {
        const scopes = [
            "user-read-currently-playing",
            "user-read-playback-state",
        ];
        const url = `${process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
        return window.location.replace(url);
    };

    signOut = async () => {
        window.localStorage.removeItem(this.key);
    }
}

export default spotifyModel