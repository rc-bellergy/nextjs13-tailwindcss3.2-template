import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Index () {
  return (
    <>
      <Head>
        <title>My First Page</title>
      </Head>

      <main className={styles.main}>
        <img src='./next.svg' width='150' />
        <h1>Template of nextjs 13</h1>
        <h3>with tailwindcss 3.2</h3>
      </main>
    </>
  )
}
