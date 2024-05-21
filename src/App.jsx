import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./components/pages/developer/ui/home_page/Home"
import About from "./components/pages/developer/ui/about_me_page/About"
import MyProjects from "./components/pages/developer/ui/projects_page/MyProjects"
import ContactMe from "./components/pages/developer/ui/contact_page/ContactMe"
import { StoreProvider } from "./store/StoreContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Projects from "./components/pages/developer/dashboard/projects/Projects"
import Skills from "./components/pages/developer/dashboard/skills/Skills"
import Message from "./components/pages/developer/dashboard/message/Message"
import HomeBanner from "./components/pages/developer/dashboard/homeBanner/HomeBanner"
import AboutBanner from "./components/pages/developer/dashboard/aboutBanner/AboutBanner"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"
import Login from "./components/pages/developer/access/Login"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import CreatePassword from "./components/pages/developer/access/CreatePassword"
import PageNotFound from "./components/partials/PageNotFound"
import Users from "./components/pages/developer/dashboard/users/Users"


function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<MyProjects/>}/>
          <Route path="/contact" element={<ContactMe/>}/>

          {/* Dashboard */}
          <Route path="/dashboard/projects" element={<Projects/>}/>
          <Route path="/dashboard/skills" element={<Skills/>}/>
          <Route path="/dashboard/message" element={<Message/>}/>
          <Route path="/dashboard/homebanner" element={<HomeBanner/>}/>
          <Route path="/dashboard/aboutbanner" element={<AboutBanner/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/create-password" element={<CreatePassword/>}/>
          <Route path="/user" element={<Users/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
