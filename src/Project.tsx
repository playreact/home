interface ProjectProps {
  name: string
  description: string
  stars: number
  language: string
}

const Project: React.FC<ProjectProps> = ({ name, description, stars, language }) => {
  return (
    <a href={`https://github.com/playreact/${name}`} target="_blank">
      <div className="h-36 p-5 flex flex-col justify-between rounded-xl bg-info bg-opacity-5 shadow hover:shadow-lg hover:bg-opacity-10 ease-out transition-transform">
        <div className="font-semibold">{name}</div>
        <div className="text-sm">{description}</div>
        <div className="flex gap-2 items-center text-sm">
          <div>⭐ {stars}</div>
          <div>{language}</div>
        </div>
      </div>
    </a>
  )
}

export default Project
