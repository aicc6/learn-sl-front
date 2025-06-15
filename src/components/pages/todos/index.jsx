import { useAppSelector } from '@/store'

const TodosPage = () => {
  const todos = useAppSelector((state) => state.todos)

  console.log(todos)

  return (
    <div className="flex justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Todos
      </h1>
    </div>
  )
}

export default TodosPage
