import { VFC } from "react"
import { TodoProps } from "../types/todo"

type Props = {
  todo: TodoProps,
  onDeleteCompletedTodo: (id: number) => void
}

export const CompletedTodo: VFC<Props> = ({todo, onDeleteCompletedTodo}) => {
  
  return (
    <li className="">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-completed-todo-button" onClick={() => onDeleteCompletedTodo(todo.id)}>削除</button>
    </li>
  )
}