import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function ContactPage() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Contact - Camilo</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Navbar />

      <main className={ styles.main }>
        <h1>Contact Page</h1>
        <h1 className={ styles.title }>
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={ styles.description }>
          Get started by editing{' '}
          <code className={ styles.code }>pages/contact.jsx</code>
        </p>
      </main>
    </div>
  )
}
