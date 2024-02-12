import { Link, Outlet, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react"

type NavLinkProps = {
  to: string
  label: string
}

const NavLink: React.FC<NavLinkProps> = ({ label, to }: NavLinkProps) => {
  const location = useLocation()

  return (
    <Link 
      className={`transition hover:text-slate-300 ${location.pathname === to && "text-slate-200"}`} 
      to={to}
    >
      {label}
    </Link>
  )
}

const MainTemplate: React.FC = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <nav className="flex flex-row justify-center absolute w-full top-16">
        <ul className="flex flex-row space-x-12 w-fit justify-center text-slate-400 font-medium px-8 py-2 border-slate-700 rounded-full border-2">
          <li>
            <NavLink to="/" label="Home" />
          </li>
          <li>
            <NavLink to="/projects" label="Projects" />
          </li>
          <li>
            <NavLink to="/about" label="About" />
          </li>
        </ul>
      </nav>

      <main className="h-full w-full">
        <div className="h-full w-full absolute overflow-hidden -z-10">
          <div className="h-48 w-48 absolute bg-slate-800 rounded-full blur-2xl -z-10" style={{
            top: mouseY - 86,
            left: mouseX - 86,
          }}>

          </div>
          <div className="h-full w-full absolute -z-20 bg-black" />
        </div>

        <Outlet />
      </main>
    </>
  )
}
export default MainTemplate
