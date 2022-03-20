// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Factory, Model, Response } from 'miragejs'
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker'

import { TodoStatus } from './todoModel'

const mirageFakeServer = createServer({
  models: {
    todo: Model,
  },

  seeds(server) {
    server.createList('todo', 10)
  },

  factories: {
    todo: Factory.extend({
      id(i) {
        return i
      },

      text() {
        return faker.lorem.sentence()
      },
      status() {
        const statuses = [TodoStatus.InProgress, TodoStatus.Initial]
        return faker.random.arrayElements(statuses, 1)
      },
    }),
  },

  routes() {
    this.namespace = 'api'

    this.get(
      '/todos',
      (schema) => {
        return schema.db.todos
      },
      { timing: 1000 }
    )

    this.post(
      '/todos',
      (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        return schema.db.todos.insert(attrs)
      },
      { timing: 500 }
    )

    this.post(
      '/todos/:id',
      (schema, request) => {
        const { id } = request.params
        const attrs = JSON.parse(request.requestBody)

        const todo = schema.db.todos.find((r) => r.id === id)

        if (todo) {
          return todo.update(attrs)
        }

        return new Response(
          400,
          { some: 'header' },
          { errors: ['cannot find the item'] }
        )
      },
      { timing: 500 }
    )

    this.delete(
      '/todos/:id',
      (schema, request) => {
        const { id } = request.params

        const todo = schema.db.todos.find((r) => r.id === id)

        if (todo) {
          return todo.destroy()
        }

        return new Response(
          400,
          { some: 'header' },
          { errors: ['cannot find the item'] }
        )
      },
      { timing: 500 }
    )
  },
})

export default mirageFakeServer
