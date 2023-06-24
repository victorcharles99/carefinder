import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../components/Landing Page/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    }
])

export default router