import type { MetaFunction } from "@remix-run/node"
import React from "react"

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

const Highlight = ({ children }: React.PropsWithChildren) => {
    return (
        <span className={ "italic" }>
           { children }
        </span>
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
                My preferred tech stack is <Highlight>Spring</Highlight> for the backend and <Highlight>React</Highlight> for the frontend.
                I am interested in JVM languages such as <Highlight>Java</Highlight> and <Highlight>Kotlin</Highlight>. I also have keen interest in
                AI/Machine Learning especially NLP and LLMs and have been experimenting with them.
                I am also dabbling around crafting native <Highlight>Android</Highlight> apps.
            </p>

            <hr className={ "h-px my-8 bg-neutral-300 border-0" }/>

            <h3 className={ "text-lg text-gray-700 font-semibold" }>Recent Projects</h3>

            <hr className={ "h-px my-8 bg-neutral-300 border-0" }/>

            <h3 className={ "text-lg text-gray-700 font-semibold" }>Recent Writings</h3>
        </section>
    )
}

export {
    meta
}
export default Index
