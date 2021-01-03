import { TaskModel } from 'domain/models'
import React, {FC} from 'react'
import { Task } from './task'

export const TaskList:FC<{tasks: TaskModel[]}> = ({tasks}) => {
  return (
    <>
      {
        tasks.map((task) => 
          <Task date={task.date} id={task.id} text={task.text} />
        )
      }
    </>
  )
}
