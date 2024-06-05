import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"
import stylesheet from "app/styles/tailwind.css?url"
import fontStylesheet from "app/styles/font.css?url"
import { LinksFunction } from "@remix-run/node"

const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
    { rel: "stylesheet", href: fontStylesheet },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className={ "bg-neutral-200" }>
        { children }
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    )
}

const App = () => {
    return <Outlet/>
}

export {
    links,
    Layout
}
export default App
