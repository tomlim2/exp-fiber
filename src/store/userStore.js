import { atom, selector } from "recoil";

export const userInfoAtom = atom({
    key: "userInfo",
    default: undefined,
});

export const isLoginState = selector({
    key: "isLogin",
    get: ({get})=>{
        const isLogin = Boolean(get(userInfoAtom))

        return isLogin
    }
});