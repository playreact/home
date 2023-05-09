interface ProjectProps {
  name: string
  description: string
  stars: number
  language: string
}

const Project: React.FC<ProjectProps> = ({ name, description, stars, language }) => {
  return (
    <a href={`https://github.com/playreact/${name}`} target="_blank">
      <div className="h-36 p-6 flex flex-col justify-between gap-2 rounded-xl bg-base-200 shadow hover:shadow-lg hover:scale-105 ease-out transition-transform">
        <div className="uppercase">{name}</div>
        <div className="opacity-70">{description}</div>
        <div className="flex gap-2.5 items-center opacity-70 text-sm">
          <div>⭐ {stars}</div>
          <div>{language}</div>
        </div>
      </div>
    </a>
  )
}

export default Project
