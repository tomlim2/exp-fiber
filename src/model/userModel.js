import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,

} from "firebase/auth";
import { auth } from "./../firebase";

const googleProvider = new GoogleAuthProvider();

class userModel {
    signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user
            const accessToken = res.accessToken
            window.localStorage.setItem("account/accessToken", accessToken);

            return user
        } catch (err) {
            console.error(err);
        }
    };

    signOut = async () => {
        try {
            const response = await auth.signOut(auth)
            if(response == undefined){
                return true
            }
            
        } catch (error) {
            console.log(error);
            return false
        }
        
    }

    signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            const token = user.accessToken;

            return true
        } catch (error) {
            return { error: error.message }
        }
    };

    signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            const token = user.accessToken;

            return true
        } catch (error) {
            return { error: error.message }
        }
    };
}

export default userModel