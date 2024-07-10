import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useRouteError,
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

const ErrorBoundary = () => {
    const error = useRouteError()

    return (
        <main className={ "flex flex-col items-center justify-center w-svw h-svh space-y-2" }>
            <h1 className={ "text-4xl font-bold text-neutral-800" }>{ error.status }</h1>
            <h2 className={ "text-2xl font-medium text-neutral-700"}>{ error.statusText }</h2>
        </main>
    )
}

export {
    links,
    Layout,
    ErrorBoundary
}
export default App
