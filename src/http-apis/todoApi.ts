import httpApi from '../common/httpApi'
import { TodoModel } from './todoModel'

class TodoApi {
  static getTodos() {
    return httpApi.get('todos').catch(() => null)
  }

  static addTodo(todo: TodoModel) {
    return httpApi.post('todos', todo).catch(() => null)
  }
}

export default TodoApi
