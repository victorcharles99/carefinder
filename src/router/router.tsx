import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../components/Landing Page/LandingPage";
import SignUp from "../components/Auth/SignUp.js";
import Login from "../components/Auth/Login.js";
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
    },
    {
      path: "/login",
      element: <Login/>
    }
])

export default router