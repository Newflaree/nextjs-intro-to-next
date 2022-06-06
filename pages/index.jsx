import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Home - Camilo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Ir a <a href="/about">About</a>
        </h1>

        <p className={ styles.description }>
          Get started by editing{' '}
          <code className={ styles.code }>pages/index.jsx</code>
        </p>
      </main>
    </div>
  )
}
