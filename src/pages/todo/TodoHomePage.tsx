import { Container } from '@mantine/core'
import { useEffect, useState } from 'react'
import TodoApi from '../../http-apis/todoApi'
import { TodoModel } from '../../http-apis/todoModel'

function TodoHomePage() {
  const initialTodos = new Array<TodoModel>()
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    async function fetchTodos() {
      const response = await TodoApi.getTodos()

      if (response?.data) {
        setTodos(response?.data)
      }
    }

    fetchTodos()
  }, []) // only run once

  return (
    <Container size="xl" px="xs">
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </Container>
  )
}

export default TodoHomePage
