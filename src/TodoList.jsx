import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "Empty"}
        {todos.map(todo => {
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
               // id={todo.id} 
              // completed={todo.compelted} 
              // title={todo.title} 
              // key={todo.id}
          )
        })}
      </ul>
    </>
  )
}