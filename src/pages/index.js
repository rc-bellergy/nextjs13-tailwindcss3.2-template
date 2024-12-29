import Head from 'next/head'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export default function Index () {
  // Sample of tailwind-styled-components
  const Main = tw.main`
    container max-w-md mx-auto rounded-lg bg-slate-200 p-6 mt-8 h-[350px] text-center
    flex flex-col justify-evenly items-center
    `
  return (
    <>
      <Head>
        <title>My First Page</title>
      </Head>

      <Main>
        <img src='./next.svg' width='150' />
        <h1>Template of nextjs 15</h1>
        <p>
          using
          <br />
          <b>tailwindcss 3.2</b>
          <br />&<br />
          styled-components
          <br />&<br />
          tailwind-styled-components
        </p>
      </Main>
    </>
  )
}
