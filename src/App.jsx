import { StrictMode } from 'react'
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import {
    RecoilRoot,
} from 'recoil';

import './style/common.scss'

const App = () => {
    return (
        <StrictMode>
            <RecoilRoot>
                <RouterProvider router={router} />
            </RecoilRoot>
        </StrictMode>
    )
}

export default App