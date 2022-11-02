import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () =>{
    return (
        <div>
            <header>
                <nav><ul><li>hi1</li><li><Link to={"framer-driven"}>Framer Driven</Link> </li></ul></nav>
                <Outlet/>
            </header>
            
        </div>
    )
}

export default DefaultLayout