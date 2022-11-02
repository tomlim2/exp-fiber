import { createBrowserRouter } from "react-router-dom"
import Main from "../pages/Main"
import DefaultLayout from "../layout/DefaultLayout"
import FramerDriven from "../pages/FramerDriven"

export const router = createBrowserRouter([{
    path:"/", 
    element: <DefaultLayout/>,
    children:[{
        path:"/", 
        element: <Main/>
    },
    {
        path:"/framer-driven", 
        element: <FramerDriven/>
    }]
    },
    
])