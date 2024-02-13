import {
  IconBrandAndroid,
  IconBrandCSharp,
  IconBrandCpp,
  IconBrandDocker,
  IconBrandKotlin,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconLeaf
} from "@tabler/icons-react"
import React from "react"
import AnimatedPage from "~/components/animation/animated-page"

const getIcon = (tech: string) => {
  switch (tech) {
    case "Spring":
      return <IconLeaf size={20} />
    case "Kotlin":
      return <IconBrandKotlin size={20} />
    case "React":
      return <IconBrandReact size={20} />
    case "TypeScript":
      return <IconBrandTypescript size={20} />
    case "Docker":
      return <IconBrandDocker size={20} />
    case "C#":
      return <IconBrandCSharp size={20} />
    case "C++":
      return <IconBrandCpp size={20} />
    case "Android":
      return <IconBrandAndroid size={20} />
    case "Python":
      return <IconBrandPython size={20} />
    default:
      return null
  }
}

const projects: ProjectCardProps[] = [
  {
    name: "Bloom",
    description: "Personal time tracking web application",
    color: "#F06595",
    techStack: ["Spring", "Kotlin", "React", "TypeScript", "Docker"],
    image: "/proj_bloom.webp",
    link: "https://github.com/shazxrin/bloom"
  },
  {
    name: "Cyberwarrior",
    description: "Card game for cybersecurity education",
    color: "#868E96",
    techStack: ["Python", "React", "TypeScript"],
    image: "/proj_cyberwarrior.webp",
    link: "https://github.com/shazxrin/cyberwarrior"
  },
  {
    name: "TrackTogether",
    description: "Mutimedia tracking web application",
    color: "#5C7CFA",
    techStack: ["C#", "React", "TypeScript", "Docker"],
    image: "/proj_tracktgt.webp",
    link: "https://github.com/very-indecisive-studios/tracktgt"
  },
  {
    name: "Journal",
    description: "Personal journal mobile application",
    color: "#20C997",
    techStack: ["Android", "Kotlin"],
    image: "/proj_journal.webp",
    link: "https://github.com/shazxrin/journal"
  },
  {
    name: "SHRINE Engine",
    description: "Toy game engine for learning purposes",
    color: "#3B3B3B",
    techStack: ["C++"],
    image: "/proj_shrine.webp",
    link: "https://github.com/shazxrin/SHRINE-Engine"
  },
  {
    name: "Smash Balls Ultimate",
    description: "2D football game with physics engine",
    color: "#22B8CF",
    techStack: ["C++"],
    image: "/proj_smash_balls.webp",
    link: "https://github.com/very-indecisive-studios/smash-balls-ultimate"
  },
  {
    name: "Chaos Chef",
    description: "2D game inspired by Crossy Roads",
    color: "#339AF0",
    techStack: ["C++"],
    image: "/proj_chaos_chef.webp",
    link: "https://github.com/very-indecisive-studios/chaos-chef"
  },
]

type ProjectCardProps = {
  name: string
  description: string
  color: string
  techStack: string[]
  image: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, color, techStack, image, link }) => {
  return (
    <a href={link}>
      <div
        className="flex flex-col rounded-lg w-full h-[275px] cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundColor: color
        }}
      >
        <img className="h-[165px] object-cover rounded-t-lg" alt="" src={image} />
        <div className="flex flex-col mt-auto px-4 pb-4">
          <h2 className="text-xl font-semibold text-slate-100">{name}</h2>
          <p className="text-sm font-medium text-slate-200">{description}</p>
          <ul className="flex flex-row gap-1 text-slate-200 mt-2">
            {techStack.map((tech) => (
              <li key={tech}>
                {getIcon(tech)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  )
}


const ProjectsPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="w-full h-full overflow-x-hidden">
        <div
          className={`
            max-w-screen-xl
            mx-auto px-8 pt-40 pb-12 lg:px-24
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 
            cursor-default
          `}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  )
}
export default ProjectsPage
