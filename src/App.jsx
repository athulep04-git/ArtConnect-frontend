import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import ArtRequest from "./pages/ArtRequest"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pagenotfound from "./pages/Pagenotfound"

function App() {
  

  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Pagenotfound/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/artrequest" element={<ArtRequest/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
