import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LameJam</title>
        <meta name="description" content="The worst possible hackathon." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BLANK is too BLANK.
        </h1>
      </main>
    </div>
  )
}
