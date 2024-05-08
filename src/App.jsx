import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import About from "./components/pages/about_me/About"
import MyProjects from "./components/pages/projects/MyProjects"
import ContactMe from "./components/pages/contact/ContactMe"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<MyProjects/>}/>
          <Route path="/contact" element={<ContactMe/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
