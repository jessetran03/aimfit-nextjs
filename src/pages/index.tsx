import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation-bar';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AimFit
        </h1>

        <p className={styles.description}>
          Aim to be Fit.
        </p>
      </main>
    </div>
  )
}

export default Home
