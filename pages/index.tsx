import type { ReactNode } from 'react'
import { Code } from '@/components/code'
import { Songs } from '@/components/songs'
import type { NextPage } from 'next'
import { Contact } from '@/components/contact'
import Head from 'next/head'

function Section({ children }: { children: ReactNode }): JSX.Element {
  return <div className="w-60">{children}</div>
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jesus</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-4  ">
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
        <footer className="mt-10">
          <Section>
            <a
              href="https://github.com/jesuscovam/jesuscova.com"
              target="_blank"
              className="text-indigo-400 underline"
            >
              code from this website
            </a>
          </Section>
        </footer>
      </div>
    </>
  )
}

export default Home
