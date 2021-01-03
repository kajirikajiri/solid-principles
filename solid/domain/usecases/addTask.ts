import {TaskModel} from 'domain/models'

export interface AddTask {
  add: (params: AddTask.Params) => AddTask.Model
}

export namespace AddTask {
  export type Params = {
    text: string
    data: string
    id: string
  }
  export type Model = TaskModel
}