import Head from 'next/head'
import styles from 'styles/Home.module.css'
import React, { useState } from 'react'
import { Footer } from 'presentation/components'
import { TaskModel } from 'domain/models'
import { TaskList } from './taskList'

export const Tasks=()=> {
  const [tasks, setTasks] = useState<TaskModel[]>([])

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
        <button className="border-black border rounded py-1 px-3">add task</button>
        {
          tasks.length > 0 ? <TaskList tasks={tasks}/> : <p>...loading</p>
        }
      </main>

      <Footer/>
    </div>
  )
}

