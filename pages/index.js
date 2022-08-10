import Head from 'next/head'
import Computer from '../components/sections/Computer'
import Hero from '../components/sections/Hero'
import Technos from '../components/sections/Technos'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monogram Frontend Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero/>
        <Computer/>
        <Technos/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
