import type { ReactNode } from 'react'
import { Code } from '@/components/code'
import { Songs } from '@/components/songs'
import type { NextPage } from 'next'
import { Contact } from '@/components/contact'

function Section({ children }: { children: ReactNode }): JSX.Element {
  return <div className="w-60">{children}</div>
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black font-mono text-white ">
      <Section>
        <Contact />
      </Section>

      <div className=" mt-5 space-y-14  bg-opacity-90 py-2">
        <Section>
          <Code />
        </Section>
        <Section>
          <Songs />
        </Section>
      </div>
    </div>
  )
}

export default Home
