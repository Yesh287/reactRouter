import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/AboutUs/AboutUs'
import Home from './components/home/home'
import Contact from './components/ContactUs/ContactUs'
import GitHub, { GitCall } from './components/GitHub/GitHub'
import User from './components/User/User'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} > 
      </Route >
      <Route path="git" loader={GitCall}element={<GitHub />} />
      <Route path="/user/:userid" element={<User />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
