import { FC, ReactNode } from 'react';
import { Head } from '../../node_modules/next/document';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface LayoutProp {
  children: ReactNode;
}

export const MainLayout: FC<LayoutProp> = ({children}) => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Home - Camilo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={ styles.main }>
        { children }
      </main>
    </div>
  )
}
