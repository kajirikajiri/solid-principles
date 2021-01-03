import {TaskModel} from 'domain/models'

export interface NewTask {
  exec: () => NewTask.Model
}

export namespace NewTask {
  export type Model = TaskModel
}
