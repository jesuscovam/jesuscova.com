import Link from 'next/link'
interface IProject {
  name: string
  url: string
}

const projects: IProject[] = [
  {
    name: 'Slissto',
    url: 'https://slissto.com',
  },
  {
    name: 'PlatziPunks',
    url: 'https://platzipunks.jesuscova.com',
  },
]

export function Code(): JSX.Element {
  return (
    <section className="flex flex-col items-start justify-start text-left">
      <h2 className="text-lg font-semibold">Projects</h2>
      <div className="mt-4">
        {projects?.map((project) => (
          <Project key={project?.url} project={project} />
        ))}
      </div>
    </section>
  )
}

function Project({ project }: { project: IProject }): JSX.Element {
  if (!project) return <div />
  const { url, name } = project
  const shortURL = url?.slice(8)
  return (
    <div className="flex flex-col space-y-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black px-2 text-indigo-100 underline"
      >
        {shortURL ?? url}
      </a>
    </div>
  )
}
