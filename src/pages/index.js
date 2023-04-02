import Head from 'next/head'
import styled from 'styled-components'

export default function Index () {
  // Sample of styled-components
  const Main = styled.main`
    color: #665544;
  `
  return (
    <>
      <Head>
        <title>My First Page</title>
      </Head>

      <Main
        className='container max-w-md mx-auto rounded-lg bg-slate-200 p-6 mt-8 h-72 text-center
        flex flex-col justify-evenly items-center'
      >
        <img src='./next.svg' width='150' />
        <h1>Template of nextjs 13</h1>
        <p>
          using
          <br />
          <b>tailwindcss 3.2</b>
          <br />&<br />
          <b>styled-components</b>
        </p>
      </Main>
    </>
  )
}
