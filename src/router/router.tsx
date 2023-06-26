import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../components/Landing Page/LandingPage";
import SignUp from "../components/Landing Page/SignUp";
import Root from '../Root.jsx'

const router = createBrowserRouter([
    {
        path: "*",
        element: <Root/>
    },
    {
        path: "/",
        element: <LandingPage/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    }
])

export default router