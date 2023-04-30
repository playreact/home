import { useEffect, useState } from 'react'
import Project from './Project'
import '@fontsource/bagnard'

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
    <div className="px-8 py-24 flex min-h-screen items-center flex-col gap-10 font-['Bagnard']">
      <h1 className="font-bold text-5xl text-success"><a href="https://github.com/playreact">Play React</a></h1>
      <p className="text-2xl">A collection of React-based apps 🕹️</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {
          pinnedRepos.map(repo =>
            <Project key={repo.repo} name={repo.repo} description={repo.description} stars={repo.stars} language={repo.language} />,
          )
        }
      </div>
    </div>
  )
}

export default App
