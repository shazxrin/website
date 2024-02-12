import React from "react"
import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "shazrin" },
    { name: "description", content: "shazrin's website" },
  ]
}

type ExternalLinkProps = { 
  href: string, 
  label: string 
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, label }: ExternalLinkProps) => {
  return (
    <a className="transition hover:text-slate-300 hover:underline underline-offset-8" href={href}>
      {label}
    </a>
  )
}

const IndexPage: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-end p-24 cursor-default">
        <img 
          src="/me.webp"
          alt="Myself"
          className="w-32 h-32 rounded-full border-4 border-slate-700 object-cover"
        />
        <h1 className="text-[64px] font-black text-slate-300">
          Hello, I am Shazrin —
        </h1>
        <h2 className="text-[32px] font-bold w-1/2 mb-4 text-slate-400">
          a software engineer specialized in fullstack web development
        </h2>
        <ul className="flex flex-row space-x-6 text-slate-500 font-semibold">
          <li>
            <ExternalLink href="https://github.com/shazrin" label="GitHub" />
          </li>
          <li>
            <ExternalLink href="https://linkedin.com/in/muhammad-shazrin" label="LinkedIn" />
          </li>
          <li>
            <ExternalLink href="#" label="Resume" />
          </li>
        </ul>
      </div>
    </section>
  )
}
export default IndexPage
