import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      tasks: [],
    }
  }

  completeTask = (clickID) => {
    this.setState({
      tasks: this.state.tasks.map((item)=>{
        if (item.id === clickID){
          return {...item, completed: !item.completed}
        }
        else{
          return item;
        }
      })
    })
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleteTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter((item)=>{
       return item.completed === false ? item : null
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} clear={this.clearCompleteTasks}/>
        <TodoList tasks={this.state.tasks} completeTask={this.completeTask}/>
      </div>
    );
  }
}

export default App;
