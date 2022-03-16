export enum TodoStatus {
  Initial = 0,
  InProgress = 1,
}

export interface TodoModel {
  text: string
  status: TodoStatus
}
