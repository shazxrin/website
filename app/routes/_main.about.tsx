import React from "react"
import AnimatedPage from "~/components/animation/animated-page"



const Highlighted: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="underline font-semibold">
      {children}
    </span>
  )
}

const AboutPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col w-full h-full overflow-x-hidden items-center">
        <div className="w-full sm:max-w-2xl px-8 pt-40 pb-12 lg:px-24 cursor-default">
          <img
            src="/about.webp"
            alt="Younger me with computer"
            className="w-full h-80 rounded-md object-cover mb-8"
          />
          <div className="w-full text-slate-300 flex flex-col space-y-2">
            <p>
              I am 24 years old from Singapore. I am currently a final year <Highlighted>Computer Science</Highlighted> student at <Highlighted>National University of Singapore (NUS)</Highlighted>. I am passionate about <Highlighted>Full-stack Web Development</Highlighted> and have a keen interest in Machine Learning and Computer Graphics.
            </p>
            <p>
              My preferred backend stack is <Highlighted>Spring Boot</Highlighted> with <Highlighted>Kotlin</Highlighted> or <Highlighted>Go</Highlighted>, <Highlighted>Docker</Highlighted> for containerization and <Highlighted>PostgreSQL</Highlighted> for database management. As for the frontend, my preferred stack is using <Highlighted>React</Highlighted> with <Highlighted>TypeScript</Highlighted> built with <Highlighted>Remix</Highlighted> meta-framework for Server Side Rendering (SSR) or <Highlighted>Vite</Highlighted> to create Single Page Application (SPA) that will be bundled together with the backend stack.
            </p>
            <p>
              I enjoy tinkering with new technologies, building cool projects and maintaining my home lab during my free time. Outside of programming, I am an avid enjoyer of video games, anime, and manga.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
export default AboutPage
