import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "layout/DefaultLayout"
import NoNavigationLayout from "layout/NoNavigationLayout"

import MainPage from "pages/MainPage"
import EtcPage from "pages/EtcPage"
import FiberPage from "pages/FiberPage"
import AboutPage from "pages/AboutPage"
import MusicPage from "pages/MusicPage"

import SigninRedirectPage from "pages/SigninRedirectPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
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
            },
            {
                path: "music",
                element: <MusicPage />,
            },
        ]
    },
    {
        path: "/signin",
        element: <NoNavigationLayout />,
        children: [
            {
                path: ":platformName",
                element: <SigninRedirectPage />
            },
        ]
    },

])