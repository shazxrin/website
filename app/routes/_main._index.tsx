import type { MetaFunction } from "@remix-run/node"
import React from "react"
import { Link } from "@remix-run/react"

const meta: MetaFunction = () => {
    return [
        { title: "Shazrin" },
        { name: "description", content: "Shazrin's Website" },
    ]
}

type ExternalLinkProps = {
    name: string
    link: string
}
const ExternalLink = ({ name, link }: ExternalLinkProps) => {
    return (
        <a href={ link }
           className={ "text-sm text-gray-500 hover:text-neutral-400 underline underline-offset-4 font-medium" }>
            { name }
        </a>
    )
}

type InternalLinkProps = {
    name: string
    link: string
}
const InternalLink = ({ name, link }: InternalLinkProps) => {
    return (
        <Link to={ link }
           className={ "text-sm text-gray-500 hover:text-neutral-400 underline underline-offset-4 font-medium" }>
            { name }
        </Link>
    )
}

const Highlight = ({ children }: React.PropsWithChildren) => {
    return (
        <span className={ "italic" }>
           { children }
        </span>
    )
}

const ProjectCard = () => {
    return (
        <div className={ "flex flex-col bg-neutral-300 rounded-lg w-full max-w-[480px] h-[280px] hover:scale-105 transform transition mx-auto" }>
            <div className={"flex flex-col justify-center h-1/3 rounded-b-lg mt-auto px-4 py-2"}>
                <h4 className={"text-sm text-neutral-800 font-medium"}>Bloom</h4>
                <p className={"text-sm text-neutral-700"}>Personal gamified habit and time tracking web application</p>
            </div>
        </div>
    )
}

const Writing = () => {
    return (
        <div className={ "flex flex-row justify-center" }>
            <span className={ "text-md text-neutral-500 mr-auto" }>2024-06-24</span>
            <h4 className={ "text-md text-neutral-600 font-medium" }>Diving into the JVM: Part 1</h4>
        </div>
    )
}

const Index = () => {
    return (
        <section>
            <div>
                <h1 className={ "text-2xl text-neutral-700 font-black" }>Hello, I am Shazrin — </h1>
                <h2 className={ "text-xl text-neutral-600 font-bold" }>Software Engineer from Singapore.</h2>
                <ul className={ "flex flex-row space-x-5 mt-2" }>
                    <li>
                        <ExternalLink name={ "GitHub" } link={ "https://www.github.com/shazxrin" }/>
                    </li>
                    <li>
                        <ExternalLink name={ "LinkedIn" } link={ "https://www.linkedin.com/in/muhammad-shazrin" }/>
                    </li>
                    <li>
                        <ExternalLink name={ "Resume" } link={ "/resume.pdf" }/>
                    </li>
                </ul>
            </div>


            <p className={ "text-neutral-700 mt-6" }>
                I enjoy building things for the web, creating interactive and unique experiences.
                My preferred tech stack is <Highlight>Spring</Highlight> for the backend
                and <Highlight>React</Highlight> for the frontend.
                I am interested in JVM languages such as <Highlight>Java</Highlight> and <Highlight>Kotlin</Highlight>.
                I also have keen interest in
                AI/Machine Learning especially NLP and LLMs and have been experimenting with them.
                I am also dabbling around with native <Highlight>Android</Highlight> apps.
            </p>

            <hr className={ "h-px my-8 bg-neutral-300 border-0" }/>

            <div className={ "flex flex-row mb-4" }>
                <h3 className={ "text-lg text-gray-700 font-semibold mr-auto" }>Recent Projects</h3>

                <InternalLink name={ "View All" } link={ "/projects" }/>
            </div>

            <div className={ "grid grid-cols-1 md:grid-cols-2 gap-4" }>
                {
                    [...Array(4).keys()].map((item, index) => (
                        <ProjectCard key={ index }/>
                    ))
                }
            </div>

            <hr className={ "h-px my-8 bg-neutral-300 border-0" }/>

            <div className={ "flex flex-row mb-4" }>
                <h3 className={ "text-lg text-gray-700 font-semibold mr-auto" }>Recent Writings</h3>

                <InternalLink name={ "View All" } link={ "/blog" }/>
            </div>

            <div className={ "space-y-4" }>
                {
                    [...Array(4).keys()].map((item, index) => (
                        <Writing key={ index }/>
                    ))
                }
            </div>
        </section>
    )
}

export {
    meta
}
export default Index
