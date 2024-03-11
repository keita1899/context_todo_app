import { VFC } from "react"
import { TodoProps } from "../types/todo"
import { CompletedTodo } from "./CompletedTodo"

type Props = {
  completedTodos: TodoProps[],
  onDeleteCompletedTodo: (id: number) => void
}

export const CompletedTodoList: VFC<Props> = ({completedTodos, onDeleteCompletedTodo}) => {
  
  return (
    <ul>
      {completedTodos.map((todo) => (
        <CompletedTodo key={todo.id} todo={todo} onDeleteCompletedTodo={onDeleteCompletedTodo} />
      ))}
    </ul>
  )
}