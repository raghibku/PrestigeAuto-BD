import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex flex-col flex-grow mb-10">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout