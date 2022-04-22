interface Song {
  title: string
  src: string
}

const songs: Song[] = [
  {
    title: 'foot fungus remake',
    src: '/songs/foot_fungus_remake.mp3',
  },
  {
    title: 'rocky raccoon',
    src: '/songs/rocky_raccoon.mp3',
  },
  {
    title: 'tranquilito',
    src: '/songs/tranquilito.mp3',
  },
]

export function Songs(): JSX.Element {
  return (
    <section>
      <h2 className="text-lg font-semibold">Beats</h2>
      <div className="mt-4">
        {songs?.map(({ title, src }) => (
          <div key={title} className="mt-2 flex flex-col space-y-2">
            <p className="font-medium italic">{title}</p>
            <audio controls src={src} />
          </div>
        ))}
      </div>
    </section>
  )
}
