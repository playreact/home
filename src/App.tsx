import useSWR from 'swr'
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
  const { data: pinnedRepos } = useSWR<pinnedRepo[]>(
    'https://gh-pinned.nxl.sh/api/user/playreact',
    url => fetch(url).then(res => res.json()),
  )

  return (
    <div className="px-8 py-20 flex min-h-screen items-center flex-col gap-8 font-['Bagnard']">
      <h1 className="font-bold text-4xl text-success"><a href="https://github.com/playreact">Play React</a></h1>
      <p className="text-xl">A collection of React apps 🕹️</p>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {
          pinnedRepos
            ? pinnedRepos.map(repo =>
              <Project key={repo.repo} name={repo.repo} description={repo.description} stars={repo.stars} language={repo.language} />,
            )
            : <div className="loading loading-ring loading-lg"></div>
        }
      </div>
    </div>
  )
}

export default App
