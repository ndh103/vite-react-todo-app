// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@emotion/react'
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
    <div>
      {todos.map((todo) => (
        <div
          className="border-0 border-b-[1px] border-b-neutral-100 border-solid py-2 px-2 flex text-sm"
          css={css`
            &:hover {
              .edit-button {
                display: block !important;
              }
            }
          `}
        >
          <input type="checkbox" className="mx-2 my-2" />

          <div className="my-auto flex-grow">
            <span key={todo.id} className="cursor-pointer">
              {todo.text}
            </span>
          </div>

          <span className="edit-button hidden"> Edit</span>
        </div>
      ))}
    </div>
  )
}

export default TodoHomePage
