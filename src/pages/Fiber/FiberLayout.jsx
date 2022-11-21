import { Outlet } from "react-router-dom";

const DefaultLayout = () =>{
    return (
        <div style={{paddingTop: '30px'}}>
            <div>Nav</div>
            <Outlet/>
        </div>
    )
}

export default DefaultLayout