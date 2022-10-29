import { useEffect, useState } from "react";

const Clicker = ({ keyName }) => {
    console.log(keyName);

    const savedCount = parseInt(localStorage.getItem(keyName) ?? 0) 
    const [count, setCount] = useState(savedCount);

    useEffect(() => () => {localStorage.removeItem(keyName)}, [])

    useEffect(() => {
      localStorage.setItem(keyName, count)
    }, [count])
    

    const onClick = () => {
        setCount(value => value + 1)
    }

    return (
    <div>
        <div>Clicks counts: {count}</div>
        <button onClick={onClick}>Click me</button>
    </div>
    )
}

export default Clicker;