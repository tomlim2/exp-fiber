import { useEffect, useState } from "react";
import Clicker from "../components/Clicker";

const Main = () => {
    const [hasClicker, setHasClicker] = useState(false);

    const toggleClickerClick = () =>{
        setHasClicker(value => !value)
    }

    return (
    <div>
        <button onClick={toggleClickerClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
        { hasClicker && <>
            <Clicker keyName="countA" />
            <Clicker keyName="countB" />
            <Clicker keyName="countC" />
        </>  }
    </div>
    )
}

export default Main;