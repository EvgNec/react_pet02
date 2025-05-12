import React, {Component} from "react";
// import initialTodos from './todos.json';
import Form from "./Form/Form.js";

class App extends Component 
 {
  state = {
    // todos: initialTodos,
  };

  // deleteTodo = todoId => {};

formSubmitHandler = data =>{
  console.log(data)
}

  render (){
        return (
<>
<Form onSubmit={this.formSubmitHandler}></Form>
</>
 ) };
};


export default App;