import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "shazrin" },
    { name: "description", content: "shazrin's website" },
  ]
}

const IndexPage = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-end p-24 cursor-default">
        <h1 className="text-[64px] font-black text-slate-300">
          Hello, I am Shazrin —
        </h1>
        <h2 className="text-[32px] font-bold w-1/2 mb-4 text-slate-400">
          a software engineer specialized in fullstack web development
        </h2>
        <ul className="flex flex-row space-x-6 text-slate-500">
          <li>
            <a href="https://github.com/shazxrin">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default IndexPage
