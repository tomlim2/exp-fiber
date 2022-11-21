import userModel from "model/userModel";

class modelManager {
    constructor(){
        this.user = new userModel
    }
}

const useModel = () => new modelManager

export { useModel } 