import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "shazrin" },
    { name: "description", content: "shazrin's website" },
  ]
}

export default function Index() {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col w-full h-full justify-end p-24 cursor-default">
        <h1 className="text-[64px] font-black">
          Hello, I am Shazrin —
        </h1>
        <h2 className="text-[32px] font-bold w-1/2 mb-4">
          a software engineer specialized in fullstack web development
        </h2>
        <ul className="flex flex-row space-x-6">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
