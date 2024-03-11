import { VFC } from "react"
import { TodoProps } from "../types/todo"
import { CompletedTodo } from "./CompletedTodo"

type Props = {
  completedTodos: TodoProps[],
}

export const CompletedTodoList: VFC<Props> = ({completedTodos}) => {
  
  return (
    <ul>
      {completedTodos.map((todo) => (
        <CompletedTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}