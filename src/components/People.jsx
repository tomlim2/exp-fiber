import { useEffect, useState } from "react";

const people = () => {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        getPeople()
    },[])

    const getPeople = async () =>
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        setPeople(result)
    }

    return (
        <div>
            <ul>
            {people.map((person=>{
                return(
                    <li key={person.id}>{person.name}</li>
                )
            }))}
            </ul>
        </div>
    )
}

export default people;