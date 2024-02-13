import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react"
import tailwind from "~/styles/tailwind.css"
import fonts from "~/styles/fonts.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: fonts },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const meta: MetaFunction = () => {
  return [
    { title: "shazrin" },
    { name: "description", content: "shazrin's website" },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen bg-black">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen bg-black">
        <div className="h-screen w-screen bg flex flex-col justify-center items-center cursor-default">
          {
            isRouteErrorResponse(error)
              ? (
                <>
                  <h1 className="text-6xl font-bold text-slate-300">{error.status}</h1>
                  <p className="text-slate-400">{error.statusText}</p>
                </>
              )
              : (
                <>
                  <h1 className="text-6xl font-bold text-slate-300">Unknown Error</h1>
                </>
              )
          }
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
