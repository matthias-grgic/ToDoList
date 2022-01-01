import Button from './Button'
import styled from 'styled-components'
import './Form.css'


<Button text="ADD ME"></Button>
                                                            //2. Funktion behandelt das Formular
function Form ({callAddTodoInAppJsx}) {

    function handleFormSubmit(event) {
        event.preventDefault()
                                                            //Event wird im Formular ausgelöst, event.target (auslösende Element, Button oder) 
        const form = event.target                           // hole Form
        const inputField = form.todo.value                  //hole das Inputfeld und den Value raus
    
        const newTodo = { title: inputField, color: 'gray'} // newTodo wird neu deklariert und mit setTodos direkt initialisiert, also befüllt
                                                            //3. Rufe addTodo in der App.jsx auf
        callAddTodoInAppJsx(newTodo)

        form.reset()
        inputField.focus()
    }
                                                            //1. Neues Todo wird eingetragen -> Form
    return (
        <form onSubmit={handleFormSubmit}>
        <InputNew type="text" name="todo" placeholder="Add todo ..." />
        <Button text="ADD ME"></Button>
        </form>
    )
}

export default Form

const InputNew = styled.input`
border-radius: 20px;
  border: 2px solid black;
  color: palevioletred;
  margin: 0 1em;
  height: 42px;
  font-size: 1rem;  
  outline: none;    
`
