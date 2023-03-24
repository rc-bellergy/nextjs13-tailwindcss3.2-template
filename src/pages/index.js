import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <title>My First Page</title>

      <main className={styles.main}>
        <h1>Template of nextjs 13</h1>
        <h3>with tailwindcss 3.2</h3>
      </main>
    </>
  )
}
