import { useEffect, useState } from 'react'
import Project from './Project'

interface pinnedRepo {
  owner: string
  repo: string
  description: string
  language: string
  languageColor: string
  stars: number
  forks: string
}

const App: React.FC = () => {
  const [pinnedRepos, setPinnedRepos] = useState<pinnedRepo[]>([])

  useEffect(() => {
    fetch('https://gh-pinned.nxl.sh/api/user/playreact')
      .then(response => response.json())
      .then(data => setPinnedRepos(data))
  }, [])

  return (
    <div className="px-12 py-24 flex min-h-screen items-center flex-col gap-8 font-serif">
      <a href="https://github.com/playreact">
        <h1 className="font-bold text-4xl text-success">Play React</h1>
      </a>
      <p className="text-xl text-center">A collection of React-based apps 🕹️</p>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        {
          pinnedRepos.map(repo => <Project key={repo.repo} name={repo.repo} description={repo.description} stars={repo.stars} language={repo.language} />)
        }
      </div>
    </div>
  )
}

export default App
