import { TaskModel } from 'domain/models'
import React, {FC} from 'react'

export const Task:FC<TaskModel>=({date, id, text})=> {
  return <p>id: {id}, task: {text}, date: {date}</p>
}