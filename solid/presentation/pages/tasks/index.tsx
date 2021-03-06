import styles from 'styles/Home.module.css'
import React, { useState } from 'react'
import { Footer } from 'presentation/components'
import { TaskModel } from 'domain/models'
import { TaskList } from './taskList'
import { GenelateNewTask } from 'solid/data/usecases/newTask'
import { HeadTag } from './head'

export const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([])
  const [text, setText] = useState<TaskModel['text']>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setText(value)
  }

  const handleClickSave = () => {
    const copy = [...tasks]
    const newTask = new GenelateNewTask(text).exec()
    const newTasks = [newTask, ...copy]
    setTasks(newTasks)
  }

  return (
    <div className={styles.container}>
      <HeadTag/>

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

