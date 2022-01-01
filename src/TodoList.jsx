import Todo from './ToDo'

function TodoList({todos}) {
    const todoItems = todos.map( (todo, index) => (                                   //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  <Todo key={index} title={todo.title} color={todo.color} />
  ))
    
    return (
        <ul>
        {todoItems}
        </ul>
    )
}

export default TodoList



