interface ProjectProps {
  name: string
  description: string
  stars: number
  language: string
}

const Project: React.FC<ProjectProps> = ({ name, description, stars, language }) => {
  return (
    <a href={`https://github.com/playreact/${name}`} target="_blank">
      <div className="h-36 p-5 flex flex-col justify-between gap-2 rounded-xl bg-success bg-opacity-5 shadow hover:scale-105 hover:bg-opacity-10 ease-out transition-transform">
        <p className="text-xl font-bold">{name}</p>
        <p>{description}</p>
        <div className="flex gap-1.5 items-center text-sm font-sans">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg></span>
          <span>{stars}</span>
          <span>•</span>
          <span>{language}</span>
        </div>
      </div>
    </a>
  )
}

export default Project
