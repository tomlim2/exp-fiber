import { atom, selector } from "recoil";

const key = 'spotify/accessToken'

export const spotifyAccessTokenAtom = atom({
    key: "spotifyAccessToken",
    default: undefined,
})

export const isSpotifyLoginAtom = atom({
    key: "isSpotifyLogin",
    default: false,
})