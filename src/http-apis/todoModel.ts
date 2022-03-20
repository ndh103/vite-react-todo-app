export enum TodoStatus {
  Initial = 0,
  InProgress = 1,
}

export interface TodoModel {
  id: number
  text: string
  status: TodoStatus
}
