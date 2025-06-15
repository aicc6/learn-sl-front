import { http } from '@/lib/http'

const getTodos = async ({ page = 1, size = 10 }) => {
  return http.GET('/todos', {
    params: {
      query: {
        page,
        size,
      },
    },
  })
}

const getTodo = async (todoId) => {
  return http.GET('/todos/{todoId}', {
    params: {
      path: todoId,
    },
  })
}

const addTodo = async (todo) => {
  return http.POST('/todos', {
    body: todo,
  })
}

const updateTodo = async (todoId, todo) => {
  return http.PUT('/todos/{todoId}', {
    params: {
      path: { todoId },
    },
    body: todo,
  })
}

const deleteTodo = async (todoId) => {
  return http.DELETE('/todos/{todoId}', {
    params: {
      path: { todoId },
    },
  })
}

export const todoService = {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}
