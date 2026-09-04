import { Link, Outlet } from 'react-router-dom'

function DashbordLayout() {
  return (
    <div>
      <nav className="flex justify-evenly bg-yellow-300">
        <Link to={"/"}>default</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>ABout</Link>
      </nav>
      <Outlet />
      <footer>RAD @ 2026</footer>
    </div>
  )
}

export default DashbordLayout