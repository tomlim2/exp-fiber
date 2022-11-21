import { useMemo, useState } from "react";
import { userInfoAtom } from 'store/userStore'
import { useRecoilState } from 'recoil'
import { useModel } from "model";

import Clicker from "components/Clicker";
import People from "components/People";
import LoginChecker from "components/junkyard/LoginChecker";

import "style/pages/etc.scss";

const EtcPage = () => {
    const model = useModel()
    const [_, setUserInfo] = useRecoilState(userInfoAtom)
    const [hasClicker, setHasClicker] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const clickerCount = 4;

    const toggleClickerClick = () => {
        setHasClicker(value => !value)
    }

    const hslRandomColor = useMemo(() => {
        const colors = []
        for (let i = 0; i < clickerCount; i++)
            colors.push(`hsl(${Math.random() * 360}deg, 100%, 75%)`)

        return colors
    }, [])

    const increment = () => {
        setTotalCount(value => value + 1)
    }

    const tempArray = () => {
        return [...Array(clickerCount)]
    }

    const onClick = async (id) => {
        switch (id) {
            case 'googleLogin':
                const googleLogin = await model.user.signInWithGoogle()
                const userCopy = JSON.parse(JSON.stringify(googleLogin));
                setUserInfo(userCopy)
                break;

            case 'logOut':
                const signOut = await model.user.signOut()
                if(signOut){
                    setUserInfo(undefined)
                } else {
                    console.log(signOut);
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className="page etc">
            <section className="section">
                <h2>LoginChecker</h2>
                <LoginChecker />
            </section>
            <section className="section">
                <h2>model Test</h2>
                <button onClick={() => onClick('googleLogin')}>Google Login</button>
                <br />
                <button onClick={() => onClick('logOut')}>logout</button>
            </section>
            <section className="section">
                <h2>totalCount: {totalCount}</h2>

                <button onClick={toggleClickerClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
                {hasClicker && tempArray().map((value, index) => <Clicker key={index} increment={increment} keyName={`count${index}`} backgroundColor={hslRandomColor[index]} />)
                }
            </section>

            <section className="section">
                <h2>people</h2>
                <People />
            </section>

        </div>
    )
}

export default EtcPage;