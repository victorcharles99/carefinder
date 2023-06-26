import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/Landing Page/LandingPage"
import SignUp from "./components/Landing Page/SignUp"

const Root: React.FC = () => {
  return (
    // <BrowserRouter>
      <Routes>
          <Route path="/" index element={<LandingPage/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
        </Routes>
    // </BrowserRouter>
  )
}

export default Root