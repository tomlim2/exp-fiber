import userModel from "model/userModel";
import spotifyModel from "model/spotifyModel";

class modelManager {
    constructor(){
        this.user = new userModel
        this.spotify = new spotifyModel
    }
}

const useModel = () => new modelManager

export { useModel } 