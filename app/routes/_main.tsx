import { Link, Outlet } from "@remix-run/react"
import React from "react"

type NavBarLinkProps = {
    name: string
    link: string
}
const NavBarLink = ({ name, link }: NavBarLinkProps) => {
    return (
        <Link to={ link } className={ "text-md text-neutral-700 hover:text-neutral-500 underline underline-offset-4 font-medium" }>
            { name }
        </Link>
    )
}

const Main = () => {
    return (
        <main className={ "max-w-[720px] mx-auto px-8 md:px-0" }>
            <nav className={ "flex flex-row items-center mt-12 mb-4" }>
                <img src={ "/logo.png" } className={ "w-10 h-10 object-cover object-center rounded-full mr-auto" }/>
                <ul className={ "flex flex-row space-x-5" }>
                    <li>
                        <NavBarLink name={ "About" } link={ "/" }/>
                    </li>
                    <li>
                        <NavBarLink name={ "Projects" } link={ "/projects" }/>
                    </li>
                    <li>
                        <NavBarLink name={ "Blog" } link={ "/blog" }/>
                    </li>
                </ul>
            </nav>

            <hr className={ "h-px mb-8 bg-neutral-300 border-0" }/>

            <Outlet/>

            <hr className={ "h-px mt-8 bg-neutral-300 border-0" }/>

            <footer className={ "flex flex-row items-center mb-12 mt-4" }>
                <p className={ "text-neutral-500 text-sm mr-auto" }>© 2024 Shazrin</p>
                <a href={ "#" } className={ "text-neutral-500 text-sm underline underline-offset-4" }>Source</a>
            </footer>
        </main>
    )
}

export default Main
