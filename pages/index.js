import Head from 'next/head'
import Api from '../components/sections/Api'
import Audit from '../components/sections/Audit'
import Computer from '../components/sections/Computer'
import Hero from '../components/sections/Hero'
import Markup from '../components/sections/Markup'
import Technos from '../components/sections/Technos'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monogram Frontend Test</title>
        <meta name="description" content="Monogram frontend test by Etienne Moureton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero/>
        <Computer/>
        <Technos/>
        <Api />
        <Markup />
        <Audit />
      </main>
    </div>
  )
}
