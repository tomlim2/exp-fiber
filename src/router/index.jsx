import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import Main from "../pages/Main"
import R42 from "../pages/Fiber/R42"

export const router = createBrowserRouter([{
    path:"/", 
    element: <DefaultLayout/>,
    children:[{
        path:"/", 
        element: <Main/>
    },
    {
        path:"fiber", 
        children:[{
            path:"",
            element: <R42/>
        }]
    },]
    },
    
])