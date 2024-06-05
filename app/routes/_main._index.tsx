import type { MetaFunction } from "@remix-run/node"

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
        <a href={ link } className={ "text-sm text-gray-500 hover:text-neutral-400 underline underline-offset-4 font-medium" }>
            { name }
        </a>
    )
}

const Index = () => {
    return (
        <section>
            <div className={ "flex flex-row items-center" }>
                <div className={ "mr-auto" }>
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

                <img src={ "/notme.jpg" } className={ "w-24 h-24 rounded-full object-cover object-center grayscale" } />
            </div>


            <p className={ "text-neutral-700 mt-6" }>
                Recent Computer Science graduate from National University of Singapore. Demonstrated expertise and
                proficiency in
                frontend and backend Web Development; with experience in React, in-depth background in Java and its Java
                Virtual
                Machine, and professional experience with the Spring ecosystem. Possess knowledge and exposure in DevOps
                with tools
                such as Linux, Docker and Kubernetes. Passionate in AI/Machine Learning specifically in Natural Language
                Processing.
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
