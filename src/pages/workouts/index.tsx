import type { NextPage } from 'next'
import Head from 'next/head'
import NavigationBar from '../../components/navigation-bar'

const Workouts: NextPage = () => {
  return (
    <div className="h-auto">
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>
      <main>
        <div>Workouts</div>
      </main>
    </div>
  )
}

export default Workouts
