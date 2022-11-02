import { useEffect, useRef, useState } from "react";

const Clicker = ({ increment, keyName, backgroundColor }) => {
    const savedCount = parseInt(localStorage.getItem(keyName) ?? 0) 
    const [count, setCount] = useState(savedCount);
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.style.color = "#252525"
        
        return () => {localStorage.removeItem(keyName)}
    }, [])

    useEffect(() => {
      localStorage.setItem(keyName, count)
    }, [count])
    

    const onClick = () => {
        setCount(value => value + 1)
        increment()
    }

    return (
    <div>
        <div> Clicks counts: {count}</div>
        <button ref={buttonRef} style={{backgroundColor, color:"white"}} onClick={onClick}>Click me</button>
    </div>
    )
}

export default Clicker;