import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import EditBlog from "./pages/EditBlog"
import CreateBlog from "./pages/CreateBlog"
import Navbar from "./components/Navbar"
import Logo from "./components/Logo"
import Blog from "./pages/Blog"

function App() {

  return (
    <>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<EditBlog />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
