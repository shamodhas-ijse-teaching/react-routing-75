import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import DashbordLayout from "./layout/dashbord"

const Landing = lazy(() => import("./pages/landing"))
const Home = lazy(() => import("./pages/home"))
const About = lazy(() => import("./pages/about"))
const Login = lazy(() => import("./pages/login"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<DashbordLayout />}>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
