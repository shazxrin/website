import { Link, Outlet, useLocation } from "@remix-run/react"
import { AnimatePresence } from "framer-motion"

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
  return (
    <>
      <nav className="flex flex-row justify-center absolute w-full top-16 z-10">
        <ul className="flex flex-row space-x-12 w-fit justify-center text-slate-400 font-medium px-8 py-2 bg-slate-700 rounded-full">
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
          <div className="h-full w-full absolute -z-20 bg-black" style={{
            backgroundImage: "radial-gradient(circle, rgb(40 40 40) 2px, rgba(0, 0, 0, 0) 2px)",
            backgroundSize: "80px 80px",
          }}/>
        </div>

        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </>
  )
}
export default MainTemplate
