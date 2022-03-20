import httpApi from '../common/httpApi'
import { TodoModel } from './todoModel'

class TodoApi {
  static getTodos() {
    return httpApi.get('/api/todos').catch(() => null)
  }

  static addTodo(todo: TodoModel) {
    return httpApi.post('/api/todos', todo).catch(() => null)
  }
}

export default TodoApi
