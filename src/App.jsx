import { RouterProvider } from "react-router-dom"
import { router } from "./router"

import './style/common.scss'

const App = () => {
    return (
        <>
            <RouterProvider router = {router} />
        </>
        
    )
}

export default App