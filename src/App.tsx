import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { Todo } from './components/Todo';
import { TodoProps } from './types/todo';
import { CompletedTodoList } from './components/CompletedTodoList';

const initialState: TodoProps = {
  id: 0,
  text: '',
  isCompleted: false,
  isEdit: false,
}

const App: React.VFC = () => {
  const [todo, setTodo] = useState<TodoProps>(initialState)
  const [completedTodos, setCompletedTodos] = useState<TodoProps[]>([])

  const hasTodo: boolean = todo.id !== 0
  const hasCompletedTodos: boolean = completedTodos.length > 0

  const addTodo = (todoText: string): void => {
    if (hasTodo) return

    const newTodo: TodoProps = {
      id: Math.random(),
      text: todoText,
      isCompleted: false,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const deleteTodo = (): void => {
    if (!hasTodo) return 
    setTodo({
      id: 0,
      text: '',
      isCompleted: false,
      isEdit: false,
    })
  }

    const toggleEditTodo = (): void => {
    setTodo({
      ...todo,
      isEdit: !todo.isEdit
    })
  }

  const saveTodo = (todoText:string): void => {
    const newTodo: TodoProps = {
      ...todo,
      text: todoText,
      isEdit: false
    }

    setTodo(newTodo)
  }

  const completeTodo = (): void => {
    const newCompletedTodo = {
      id: todo.id,
      text: todo.text,
      isCompleted: true,
      isEdit: false,
    }
    setCompletedTodos([
      ...completedTodos,
      newCompletedTodo
    ])
    setTodo({
      id: 0,
      text: '',
      isCompleted: false,
      isEdit: false,
    })
  }

  const deleteCompletedTodo = (id: number): void => {
    const newCompletedTodos = completedTodos.filter(todo => todo.id !== id)
    setCompletedTodos(newCompletedTodos)
  }

  const deleteAllCompletedTodos = (): void => {
    setCompletedTodos([])
  }

  return (
    <div className="App">
      <button className="delete-button" onClick={deleteTodo} disabled={!hasTodo}>削除</button>
      {hasTodo && (
        <Todo todo={todo} onCompleteTodo={completeTodo} onToggleEditTodo={toggleEditTodo} onSaveTodo={saveTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} disabled={hasTodo} />
      <button className="all-delete-button" disabled={!hasCompletedTodos} onClick={deleteAllCompletedTodos}>全て削除</button>
      <CompletedTodoList completedTodos={completedTodos} onDeleteCompletedTodo={deleteCompletedTodo} />
    </div>
  );
}

export default App;
