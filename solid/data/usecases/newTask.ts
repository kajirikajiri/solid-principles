import {NewTask} from 'domain/usecases'
import { v4 as uuid } from 'uuid'
import {format} from 'date-fns'

export class GenelateNewTask implements NewTask {
  constructor (
    private readonly text: string
  ) {}

  exec (): NewTask.Model {
    const date = format(new Date(), 'yyyy/MM/dd HH:mm:ss')
    const id = uuid()
    const task = {
      id,
      date,
      text: this.text
    }
    return task
  }
}