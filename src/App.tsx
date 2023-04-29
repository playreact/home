import { useEffect, useState } from 'react'
import Project from './Project'
import '@fontsource/noto-serif'

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
    <div className="px-8 py-24 flex min-h-screen items-center flex-col gap-8 font-['Noto_Serif']">
      <a href="https://github.com/playreact">
        <h1 className="font-bold text-4xl text-accent hover:text-info">Play React</h1>
      </a>
      <p className="text-lg text-center">A collection of React-based apps 🕹️</p>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
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
