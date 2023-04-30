interface ProjectProps {
  name: string
  description: string
  stars: number
  language: string
}

const Project: React.FC<ProjectProps> = ({ name, description, stars, language }) => {
  return (
    <a href={`https://github.com/playreact/${name}`} target="_blank">
      <div className="h-40 p-6 flex flex-col justify-between rounded-xl bg-success bg-opacity-5 shadow hover:shadow-lg hover:bg-opacity-10 ease-out transition-transform text-base-content/80 hover:text-base-content">
        <div className="text-xl">{name}</div>
        <div>{description}</div>
        <div className="flex gap-2.5 items-center">
          <div>⭐ {stars}</div>
          <div>{language}</div>
        </div>
      </div>
    </a>
  )
}

export default Project
