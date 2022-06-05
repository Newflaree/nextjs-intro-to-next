import Head from 'next/head';
import styles from '../styles/Home.module.css';

const AboutPage = () => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>About - Camilo</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Ir a <a href='/'>Home</a>
        </h1>

        <p className={ styles.description }>
          Get started by editing{' '}
          <code className={ styles.code }>pages/about.jsx</code>
        </p>
      </main>
    </div>
  )
}

export default AboutPage;
