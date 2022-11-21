import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import {
    RecoilRoot,
} from 'recoil';

import './style/common.scss'

const App = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    )
}

export default App