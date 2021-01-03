import Head from 'next/head'
import styles from 'styles/Home.module.css'
import React, { useState } from 'react'
import { Footer } from 'presentation/components'
import { TaskModel } from 'domain/models'
import { TaskList } from './taskList'
import { v4 as uuid } from 'uuid'
import {format} from 'date-fns'

export const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([])
  const [text, setText] = useState<TaskModel['text']>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setText(value)
  }

  const handleClickSave = () => {
    const copy = [...tasks]
    const id = uuid()
    const date = format(new Date(), 'yyyy/MM/dd HH:mm:ss')
    const newTasks = [{ text, id, date }, ...copy]
    setTasks(newTasks)
  }

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
        <div>
          <input className="border-black border rounded mt-2" value={text} onChange={handleChange} />
          <button className="border-black border rounded px-3 font-bold ml-3" onClick={handleClickSave}>save task</button>
        </div>
        {
          tasks.length > 0 ? <TaskList tasks={tasks} /> : <p>...loading</p>
        }
      </main>

      <Footer />
    </div>
  )
}

