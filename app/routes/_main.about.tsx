import React from "react"

const AboutPage: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full px-8 pt-40 pb-12 lg:px-24 cursor-default items-center">
        <img
          src="/about.webp"
          alt="Younger me with computer"
          className="w-full sm:w-1/2 xl:w-1/3 h-80 rounded-md object-cover mb-8"
        />
        <div className="w-full sm:w-1/2 xl:w-1/3 text-slate-300 flex flex-col space-y-2">
          <p>
            I am a final year Computer Science student at National University of Singapore with a strong passion for full-stack development. I also have a strong interest in AI and Computer Graphics.
          </p>
          <p>
            My preferred backend stack is Spring Boot with Kotlin or just plain Go, Docker and Kubernetes for containerization and orchestration, and PostgreSQL for database management.
          </p>
          <p>
            As for the frontend, my preferred stack is using React with TypeScript using Next.js/Remix meta-frameworks or just Vite for SPA applications.
          </p>
          <p>
            I enjoy tinkering with new technologies and building cool stuff. Outside of programming, I enjoy playing video games, watching anime, and reading manga.
          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutPage
