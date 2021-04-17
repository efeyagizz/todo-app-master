import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";

class TodoHeader extends React.Component {
  render () {
    return <h1 className="header">Todo list</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
      
    };
  }
  
  
  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      console.log("eklendi" + JSON.stringify(this.state.todos))
      const userInput = {
        status: false,
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  


  removeItem = (id) => {
    const updatedTodos = [...this.state.todos.filter(item => item.id !== id)]
    this.setState({todos: updatedTodos})

  }

  render() {

   

    return (
      <div className="App">
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div   >
            <TodoList todos={this.state.todos} removeItem = {this.removeItem} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
