import Head from 'next/head'
import styles from 'styles/Home.module.css'
import React, { useState } from 'react'
import { Footer } from 'presentation/components'
import { TaskModel } from 'domain/models'
import { Task } from './task'

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
        {
          tasks.length > 0 ?
          tasks.map((task)=>{
            <Task date={task.date} id={task.id} text={task.text}/>
          }):<p>...loading</p>
        }
      </main>

      <Footer/>
    </div>
  )
}

