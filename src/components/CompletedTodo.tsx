import { VFC } from "react"
import { TodoProps } from "../types/todo"

type Props = {
  todo: TodoProps
}

export const CompletedTodo: VFC<Props> = ({todo}) => {
  
  return (
    <li className="">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-completed-todo-button" >削除</button>
    </li>
  )
}