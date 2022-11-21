import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "layout/DefaultLayout"

import MainPage from "pages/MainPage"
import EtcPage from "pages/EtcPage"
import FiberPage from "pages/FiberPage"
import AboutPage from "pages/AboutPage"

export const router = createBrowserRouter([{
    path: "/",
    element: <DefaultLayout />,
    children: [{
        path: "/",
        element: <MainPage />
    }, 
    {
        path: "about",
        element: <AboutPage />
    },
    {
        path: "etc",
        element: <EtcPage />
    },
    {
        path: "fiber",
        element: <FiberPage />,
    },]
},

])