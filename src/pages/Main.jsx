import { useMemo, useState } from "react";
import Clicker from "../components/Clicker";
import People from "../components/People"

const Main = ({children}) => {
    const [hasClicker, setHasClicker] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    const clickerCount = 4;

    const toggleClickerClick = () =>{
        setHasClicker(value => !value)
    }

    const hslRandomColor = useMemo(() =>
    {
        const colors = []
        for(let i = 0; i < clickerCount; i++)
            colors.push(`hsl(${ Math.random() * 360 }deg, 100%, 75%)`)

        return colors
    }, [])

    const increment = () => {
        setTotalCount(value => value + 1)
    }

    const tempArray = () => {
        return [...Array(clickerCount)]
    }

    return (
    <div>
        <section>
            <h2>totalCount: {totalCount}</h2>
            
            <button onClick={toggleClickerClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
            { children }
            { hasClicker && tempArray().map((value, index) => <Clicker key={index} increment={increment} keyName={`count${index}`} backgroundColor={hslRandomColor[index]} />) 
            }
        </section>

        <section>
            <h2>people</h2>

            <People/>
        </section>

    </div>
    )
}

export default Main;