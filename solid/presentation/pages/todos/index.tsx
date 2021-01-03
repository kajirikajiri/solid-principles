import Head from 'next/head'
import styles from 'styles/Home.module.css'
import React from 'react'
import { Footer } from 'presentation/components'

export const Todos=()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todos
        </h1>
      </main>

      <Footer/>
    </div>
  )
}

