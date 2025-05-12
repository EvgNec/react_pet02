import React, {Component} from "react";
import initialTodos from './todos.json';
import Form from "./Form/Form.js";

class App extends Component 
 {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {};



  render (){
        return (
<>
<Form></Form>
</>
 ) };
};


export default App;