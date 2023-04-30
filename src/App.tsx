import type { SVGProps } from 'react'
import { Suspense, useEffect, useState } from 'react'
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

function Loading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="13" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"></animate></rect></svg>
  )
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
      <h1 className="font-bold text-4xl text-success"><a href="https://github.com/playreact">Play React</a></h1>
      <p className="text-lg">A collection of React-based apps 🕹️</p>
      <Suspense fallback={<Loading />}>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {
            pinnedRepos.map(repo =>
              <Project key={repo.repo} name={repo.repo} description={repo.description} stars={repo.stars} language={repo.language} />,
            )
          }
        </div>
      </Suspense>
    </div>
  )
}

export default App
