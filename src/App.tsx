import Navbar from "./components/Nav/Navbar"
// import LandingPage from "./components/Landing Page/LandingPage"
import {RouterProvider} from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import router from "./router/router"
function App() {

  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
    </>
  )
}

export default App
