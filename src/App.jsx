import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import ArtRequest from "./pages/ArtRequest"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pagenotfound from "./pages/Pagenotfound"
import SingleArtwork from "./pages/SingleArtwork"
import AdminPage from "./pages/admin/AdminPage"
import Profile from "./pages/Profile"
import MyRequests from "./pages/MyRequests"

function App() {
  

  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Pagenotfound/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/artwork/:id" element={<SingleArtwork/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/artrequest" element={<ArtRequest/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/myrequests" element={<MyRequests/>} />
      </Routes>
    </>
  )
}

export default App
